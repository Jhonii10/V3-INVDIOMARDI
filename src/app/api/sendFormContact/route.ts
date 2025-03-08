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

    const companyLogo = 'https://inversionesdiomardi-demo.vercel.app/images/logo.png'; // URL del logo de la empresa
    const companyName = 'Inversiones Diomardi';
    const companyAddress = 'Cl. 5 #46-83, Local 239, Cali, Colombia';
    const companyPhone = '+573164682528';
    const companyEmail = 'inversionesdimardi.demo@gmail.com';

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

    await transporter.sendMail({
      from: `"${companyName}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Gracias por tu mensaje',
      text: `Hola ${name},\n\nGracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.\n\nSaludos,\n${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #004aad; ">Hola ${name}.</h2>
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


    return NextResponse.json({ success: true, message: 'Correo enviado exitosamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ success: false, message: 'Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.' }, { status: 500 });
  }
}

