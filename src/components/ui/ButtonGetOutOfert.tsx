'use client';

import React from 'react'

export const ButtonGetOutOfert = () => {
  return (
    <div className='relative w-full '>
        <form  >
          <div className='block md:flex flex-row justify-end items-center w-full  ' >
            <div className={`
                            relative overflow-hidden w-full h-14 md:h-9 transition-colors duration-300 ease-in-out rounded-xl 
                            before:content-[''] before:block before:absolute before:z-10 before:top-1/2 before:left-6 before:w-[1.125rem] before:h-[.875rem] before:transform before:-translate-y-[48%] before:pointer-events-none before:bg-no-repeat before:bg-center before:bg-[url('/images/email.svg')] before:bg-contain`
                        }>
            <input
              type='email'
              name='email'
              placeholder='name@gmail.com'
              className='absolute top-0 left-0 w-full h-full outline-none text-gray-600 pl-14 pr-14 text-base bg-gray-100'
              autoComplete='off'
            />
            </div>
          
          <button 
            className={`
                border-0 pr-11 pl-6 flex-shrink-0 h-14 md:h-9 w-full md:w-[50%] relative md:absolute -mr-2 rounded-[1.875rem] cursor-pointer block overflow-hidden bg-[var(--third-color-400)] whitespace-nowrap truncate font-bold transition-colors duration-300 ease-in-out
                after:content-[''] after:block after:absolute after:top-0 after:right-[1.3rem]  after:h-full after:bg-[url('/images/submit-arrow.svg')] after:bg-center after:bg-no-repeat after:bg-contain after:w-3 after:md:w-[.625rem]
                `}>
            <span>Solicitar Nuestra Oferta</span>
          </button>
          </div>
        </form>
      
    </div>
  )
}
