import React from 'react'
import { ButtonGetOutOfert } from '../ui/ButtonGetOutOfert'
import Link from 'next/link'

export const Jobs = () => {
  return (
    <div className='relative w-full h-auto  '>
        <div className=' top-0 left-0 w-full h-full  '>
            <div className={`flex flex-col justify-center items-center text-center rounded-lg p-0 sm:p-10   `}>
                <h3 className='mt-4 text-2xl font-bold'>Interesado en trabajar con nosotros?</h3>
                <div className='mt-4'>Por favor, haga clic en el botón de abajo.</div>
                <div className="w-full max-w-xl mx-auto mt-4 p-4 ">
                    <ButtonGetOutOfert/>
                </div>

                <Link className="bg-[var(--primary-color-300)] hover:bg-[var(--primary-color-300)] font-bold py-5 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4" 
                    href={'/jobs'}
                > Oportunidades
                </Link>
            </div>
        </div>
    </div>
  )
}
