import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validación básica de los datos del formulario
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, message: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      port: 465, 
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, 
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`, 
      text: `Mensaje de ${name} (${email}, Teléfono: ${phone}):\n\n${message}`,
      html: `
        <h3>Tienes un nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `, 
    });

    return NextResponse.json({ success: true, message: 'Correo enviado exitosamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false, message: 'Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.' }, { status: 500 });
  }
}

