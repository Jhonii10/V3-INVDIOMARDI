'use client';

import clsx from 'clsx';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export const ButtonGetOutOfert = () => {

  const {register,handleSubmit,formState:{errors , isValid },reset, watch} = useForm();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailValue = watch('email','');
  

  const onSubmit: SubmitHandler<FieldValues> = async (data)=>{

    if(!data.email){
      return;
    }

    try {
      setLoading(true);
      const resp = await fetch('/api/sendEmail',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email:data.email
        })
      })

      if (resp.ok) {
          reset();
          setLoading(false);
          setShowForm(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }


    
  }

  return (
    <div className='relative w-full '>
      {
        !showForm && !loading &&
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='block md:flex flex-row justify-end items-center w-full  ' >
            <div className={`
                            relative overflow-hidden w-full h-14 md:h-9 transition-colors duration-300 ease-in-out rounded-xl border border-gray-200 
                            before:content-[''] before:block before:absolute before:z-[1] before:top-1/2 before:left-6 before:w-[1.125rem] before:h-[.875rem] before:transform before:-translate-y-[48%] before:pointer-events-none before:bg-no-repeat before:bg-center before:bg-[url('/images/email.svg')] before:bg-contain`
                        }>
            <input
              type='email'
              placeholder='name@gmail.com'
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: 'Dirección de correo electrónico inválida',
                },
              })}
              className={clsx('absolute top-0 left-0 w-full h-full outline-none text-gray-600 pl-14 pr-14 text-sm bg-gray-100',{
                'bg-red-100 border lg:border-red-300 bg-transparent rounded-xl': errors.email || emailValue.length > 0 && !isValid,
                'bg-green-100 border border-green-300 bg-transparent rounded-xl':isValid 
              })}
              autoComplete='off'
            />
            </div>
          
          <button 
            className={`
                border-0 pr-11 pl-6 flex-shrink-0 h-14 md:h-9 w-full md:w-[50%] relative md:absolute -mr-2 rounded-[1.875rem] cursor-pointer block overflow-hidden bg-[var(--third-color-400)] whitespace-nowrap truncate font-bold transition-colors duration-300 ease-in-out
                after:content-[''] after:block after:absolute after:top-0 after:right-[1.3rem]  after:h-full after:bg-[url('/images/submit-arrow.svg')] after:bg-center after:bg-no-repeat after:bg-contain after:w-3 after:md:w-[.625rem]
                `}
             type='submit'
                
            >
            <span>Solicitar Nuestra Oferta</span>
          </button>
          </div>
        </form>
      }

      {
        loading && (
          <div className='flex justify-center items-center'>
          <div
            className="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-[var(--primary-color-300)] rounded-full "
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
          </div>)
      }

      {
        showForm && (
          <div className='bg-gray-200 p-4 rounded-3xl'>
            <div className='font-bold text-center md:text-left'>Gracias</div>
            <div className='text-center md:text-left'>Hemos recibido su solicitud y comenzaremos a procesarla en breve.</div>
          </div>)
      }

    </div>
  )
}
