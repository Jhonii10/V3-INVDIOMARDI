import React from 'react'
import { RedesSociales } from '../ui/RedesSociales'

export const FormContact = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-16">
      

        <div>
        <h2 className="text-left text-3xl font-medium" >
        Ponte en contacto con nosotros
        </h2>
        <p className="mt-4 text-base text-gray-600 text-left">
        Escríbenos por cualquiera de nuestras cuentas de redes sociales o a nuestro correo electrónico para cualquier pregunta, duda, queja, reclamo, sugerencias o felicitaciones. Déjanos conocer tu duda en el formulario o correo de contacto.
        </p>
        <div className='mt-6'>
        <RedesSociales/>
        </div>
        </div>


        <div>
        <div className=''>
        <div className="">
        <form action="submeter-formulario.php" method="post" className='flex flex-col'>

        <label htmlFor="nombre" className="ml-2 font-medium">
        Nombre
        </label>
        <input
        type="text"
        name="introducir_nombre"
        id="nombre"
        required
        placeholder="Nombre "
        className='border border-gray-300 rounded-lg px-4 py-1 m-1'
        />

        <label htmlFor="email" className="ml-2 font-medium">
        Email
        </label>
        <input
        type="email"
        name="introducir_email"
        id="email"
        required
        placeholder="example@gmail.com"
        className='border border-gray-300 rounded-lg px-4 py-1 m-1'
        />

        <label htmlFor="telefone" className="ml-2 font-medium">
        Teléfono
        </label>
        <input
        type="tel"
        name="introducir_telefono"
        id="telefono"
        placeholder="Numero de teléfono"
        className='border border-gray-300 rounded-lg px-4 py-1 m-1'
        />


        <label htmlFor="mensaje" className="ml-2 font-medium">
        Mensaje
        </label>
        <textarea
        name="introducir_mensaje"
        className="border border-gray-300  mb-4 p-2 rounded-lg m-1"
        id="mensaje"
        required
        placeholder="Deja aquí tu comentario..."
        defaultValue={""}
        
        />

        <button 
            type="submit" 
            name="enviar_formulario" 
            id="enviar" 
            className=' rounded-md bg-[var(--primary-color-300)] font-semibold text-base px-5 py-2.5 transition hover:bg-[var(--primary-color-400)]'>
            Enviar
        </button>

        </form>
        </div>
        </div>
        </div>
</div>
  )
}
