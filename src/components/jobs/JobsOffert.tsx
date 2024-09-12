import Link from 'next/link'
import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import { PiSuitcaseSimple } from 'react-icons/pi'

export const JobsOffert = () => {
  return (
    <section>
        <div className='mx-4 lg:mx-auto max-w-6xl border shadow-lg rounded-lg p-10 '>
        <div className='flex flex-col justify-center items-center gap-3 mb-4 '>
            <PiSuitcaseSimple size={55} className='bg-[var(--primary-color-300)] rounded-lg p-1'/>
            <h3 className='text-3xl font-semibold text-center'>Oferta de trabajo</h3>
            <p className='text-center text-lg font-medium text-gray-600'>Nuestros canales oficiales son el unico medio por el cual podra encontrar nuestras oportunidades laborales</p>
        </div>
        <div className='flex justify-center gap-4 flex-wrap'>
            <Link 
                href={''}
                className='flex justify-center items-center gap-2 border shadow-md rounded-lg p-4'
                >
                <span>Linkedin</span>
                <GoLinkExternal />
            </Link>
            <Link href={''}
            className='flex justify-center items-center gap-2 border shadow-md rounded-lg p-4'
            >
                Computrabajo
                <GoLinkExternal />
            </Link>
        </div>
        </div>

    </section>
  )
}
