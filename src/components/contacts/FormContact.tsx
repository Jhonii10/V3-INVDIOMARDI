'use client'
import React from 'react'
import { RedesSociales } from '../ui/RedesSociales'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import toast from 'react-hot-toast';

export const FormContact = () => {

  const {register,handleSubmit,formState:{errors , isValid, isSubmitting },reset} = useForm();

  
  const onSubmit: SubmitHandler<FieldValues> = async (data)=>{

        const resp = await fetch('/api/sendFormContact',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({...data})
        })

        if (resp.ok) {
            toast.success('Correo enviado exitosamente')
            reset();
        }else{
            toast.error('Algo salio mal')
        }

        
  }

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
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

        <label htmlFor="nombre" className="ml-2 font-medium">
        Nombre
        </label>
        <input
            type="text"
            id="name"
            {...register('name', { required: 'El nombre es obligatorio' })}
            placeholder="Nombre"
            className={clsx('border border-gray-300 rounded-lg px-4 py-1 m-1', { 'border-red-400 bg-red-100': errors.name })}
            aria-required="true"
        />

        <label htmlFor="email" className="ml-2 font-medium">
        Email
        </label>
        <input
            type="email"
            id="email"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Dirección de correo electrónico inválida'
              }
            })}
            placeholder="example@gmail.com"
            className={clsx('border border-gray-300 rounded-lg px-4 py-1 m-1', { 'border-red-400 bg-red-100': errors.email })}
            aria-required="true"
          />

        <label htmlFor="phone" className="ml-2 font-medium">
        Teléfono
        </label>
        <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'El teléfono es obligatorio' })}
            placeholder="Número de teléfono"
            className={clsx('border border-gray-300 rounded-lg px-4 py-1 m-1', { 'border-red-500  bg-red-100': errors.phone })}
            aria-required="true"
          />


        <label htmlFor="mensaje" className="ml-2 font-medium">
        Mensaje
        </label>
        <textarea
            id="message"
            {...register('message', { required: 'El mensaje es obligatorio', minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' } })}
            placeholder="Deja aquí tu comentario..."
            className={clsx('border border-gray-300 mb-4 p-2 rounded-lg m-1', { 'border-red-500': errors.message })}
            aria-required="true"
          />
          {errors.message && <p className="text-red-500 text-sm ml-2 mb-4">{errors.message.message as any}</p>}


        <button 
            type="submit" 
            id="enviar" 
            disabled={isSubmitting}
            className={clsx(' rounded-md bg-[var(--primary-color-300)] font-semibold text-base px-5 py-2.5 transition hover:bg-[var(--primary-color-400)]',{
              'opacity-50 bg-[var(--primary-color-200)]': isSubmitting
            })}>
            Enviar

        </button>

        </form>
        </div>
        </div>
        </div>
</div>
  )
}
