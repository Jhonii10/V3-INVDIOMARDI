import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

  const {email } = await request.json();

  // Configurar transporte de nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service:'gmail',
    port: 587,
    secure: true,
    auth:{
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },

  });


  try {
    // Enviar correo a ti mismo (propietario)
    await transporter.sendMail({
      from: email, 
      to: process.env.EMAIL_USER, 
      subject: `Nuevo mensaje de ${email}`,
      text: 'Estoy interesado en sus productos pueden enviarme su catalogo', 
      html: `<p>Email: ${email}</p><p>Mensaje: ${'Estoy interesado en sus productos pueden enviarme su catalogo'}</p>`,
    });

    // Enviar respuesta automática al usuario
    await transporter.sendMail({
      from: process.env.EMAIL_USER, 
      to: email, 
      subject: 'Gracias por tu mensaje', 
      text: `Hola,\nGracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.\n\nSaludos,\n Inversiones diomardi`, 
      html: `<p>Hola,</p><p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p><p>Saludos,<br>Inversiones diomardi</p>`, // Mensaje en HTML
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' });
  }
}
