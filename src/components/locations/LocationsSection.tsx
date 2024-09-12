'use client';

import { locationsRetailers, locationsWholesalers } from '@/models';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react'

export const LocationsSection = () => {
    const [state, setState] = useState(true);
  return (
    <section>
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-16 lg:px-8">
        <div className="flex flex-col justify-center items-center">
        <h2 className='text-2xl font-semibold '>Puntos de venta</h2>
        <h3 className='mb-6'>📍Santiago de cali</h3>
        <div className='flex gap-3 flex-wrap justify-center'>
            <button 
             className={clsx('bg-[var(--primary-color-200)] px-6 py-4 rounded-full text-lg font-semibold',{
                'bg-[var(--primary-color-500)]': state
             })}
             onClick={()=>setState(true)}
            >
                Mayoristas
            </button>

            <button
                className={clsx('bg-[var(--primary-color-200)] px-6 py-4 rounded-full text-lg font-semibold ',{
                    'bg-[var(--primary-color-500)]': !state
                })}
                onClick={()=>setState(false)}
            >
                Minoristas
            </button>
        </div>
        </div>
        
        <div className='flex gap-4 flex-wrap justify-center items-center mt-8'>
            {
                state ? 
                locationsWholesalers.map((item)=>(
                    <div key={item.tienda} className='border p-6 shadow-md rounded-lg w-72'>
                            <h3 className="text-lg font-medium">
                            {item.tienda}
                            </h3>
                            <h3>
                            {item.direcion}
                            </h3>
                            <p className="mt-4 text-sm text-gray-500">
                            {item.horarios} 
                            </p>
                            <div className="mt-6 sm:text-right gap-2 flex justify-end">

                            
                            <Link
                                href={''}
                                className="inline-block rounded-lg bg-[var(--primary-color-300)] px-5 py-3 text-sm font-medium text-black"
                            >
                                Como llegar
                            </Link>
                            </div>
                    </div>
                ))
                :locationsRetailers.map((item)=>(
                    <div key={item.tienda} className='border p-6 shadow-md rounded-lg w-72'>
                            <h3 className="text-lg font-semibold capitalize ">
                            {item.tienda}
                            </h3>
                            <p className='text-sm mt-1'>
                            {item.direcion}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                            {item.horarios} 
                            </p>
                            <div className="mt-4 sm:text-right gap-2 flex justify-end">
                            <Link
                                href={''}
                                className=" rounded-lg bg-[var(--primary-color-300)] px-5 py-3 text-sm font-medium text-black"
                            >
                                Como llegar
                            </Link>
                            </div>
                    </div>
                ))
            }

        </div>
    </div>
</section>
  )
}
