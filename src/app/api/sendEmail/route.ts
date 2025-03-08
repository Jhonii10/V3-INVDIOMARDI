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

  const companyLogo = 'https://inversionesdiomardi-demo.vercel.app/images/logo.png'; // URL del logo de la empresa
  const companyName = 'Inversiones Diomardi';
  const companyAddress = 'Cl. 5 #46-83, Local 239, Cali, Colombia';
  const companyPhone = '+573164682528';
  const companyEmail = 'inversionesdimardi.demo@gmail.com';


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
      from: `"${companyName}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Gracias por tu mensaje',
      text: `Hola ${email},\n\nGracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.\n\nSaludos,\n${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #004aad; ">Hola ${email}.</h2>
          <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
          <p>Saludos.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <table style="width: 100%; font-size: 12px; color: #777; text-align: center;">
            <tr>
              <td style="padding: 10px;">
                <img src="${companyLogo}" alt="${companyName}" style="max-width: 140px;">
              </td>
              <td style="padding: 10px; text-align: left;">
                <p>${companyName}</p>
                <p>${companyAddress}</p>
                <p>${companyPhone}</p>
                <p><a href="mailto:${companyEmail}" style="color: #777777; text-decoration: none;">${companyEmail}</a></p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });


    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' });
  }
}
