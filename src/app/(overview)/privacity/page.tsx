import { BreadCrums } from "@/components";

export default function PrivacityPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>
      <div className=' pt-0 sm:pt-4 flex items-center justify-center'>
        <div className='px-4 md:px-8 lg:px-16 max-w-screen-lg '>
          <h1 className="text-left text-2xl lg:text-4xl font-bold pt-6 mb-10">Política de Privacidad y Tratamiento de Datos</h1>

          <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Información General</h2>
        <p className="text-gray-700 leading-relaxed">
          En <strong>Inversiones Diomardi</strong>, estamos comprometidos con la protección de la privacidad de nuestros usuarios y el tratamiento adecuado de los datos personales, conforme a la Ley 1581 de 2012 y sus decretos reglamentarios.
          Esta Política de Privacidad tiene como objetivo informar cómo recolectamos, utilizamos, almacenamos y protegemos tus datos personales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Datos que Recopilamos</h2>
        <p className="text-gray-700 leading-relaxed">
          Podemos recopilar los siguientes datos personales:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Nombre completo.</li>
          <li>Información de contacto (correo electrónico, número de teléfono).</li>
          <li>Información demográfica (ciudad de residencia, ocupación).</li>
          <li>Información relacionada con el uso de nuestro sitio web (dirección IP, cookies, historial de navegación).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Finalidad del Tratamiento de Datos</h2>
        <p className="text-gray-700 leading-relaxed">
          Los datos personales que recopilamos serán utilizados con las siguientes finalidades:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Procesar solicitudes, consultas y comunicaciones que realices a través de nuestro sitio web.</li>
          <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
          <li>Enviar información comercial o publicitaria sobre nuestros productos o servicios, con tu consentimiento previo.</li>
          <li>Cumplir con obligaciones contractuales y legales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Derechos del Titular de los Datos</h2>
        <p className="text-gray-700 leading-relaxed">
          Como titular de tus datos personales, tienes los siguientes derechos:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Acceso:</strong> Conocer, actualizar y rectificar tus datos personales.</li>
          <li><strong>Revocación:</strong> Solicitar la eliminación de tus datos cuando desees.</li>
          <li><strong>Reclamo:</strong> Presentar quejas por infracciones a los derechos que te otorga la ley.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Para ejercer estos derechos, puedes contactarnos en cualquier momento enviando un correo electrónico a [correo de contacto].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Confidencialidad y Seguridad de los Datos</h2>
        <p className="text-gray-700 leading-relaxed">
          En <strong>Inversiones Diomardi</strong>, implementamos medidas de seguridad administrativas, técnicas y físicas para proteger tus datos personales frente a accesos no autorizados, pérdida, alteración, o destrucción.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Transferencia y Terceros</h2>
        <p className="text-gray-700 leading-relaxed">
          Nos comprometemos a no vender, alquilar ni compartir tus datos personales con terceros sin tu consentimiento, salvo que sea necesario para cumplir con nuestras obligaciones legales o contractuales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Uso de Cookies</h2>
        <p className="text-gray-700 leading-relaxed">
          Nuestro sitio web utiliza cookies para recopilar información sobre tus preferencias y mejorar tu experiencia de navegación. Puedes configurar tu navegador para rechazar las cookies, pero esto puede limitar algunas funcionalidades del sitio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Modificaciones a la Política</h2>
        <p className="text-gray-700 leading-relaxed">
          Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Te notificaremos sobre cualquier cambio publicando una nueva versión en esta página.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contacto</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes contactarnos a:
        </p>
        <p className="text-gray-700 leading-relaxed ">
          <strong>Inversiones Diomardi</strong><br />
          Correo electrónico: [correo de contacto]<br />
          Teléfono: [número de contacto]<br />
          Dirección física: [dirección de la empresa]
        </p>
      </section>
           
        </div>
      </div>
       
    </div>
  );
}