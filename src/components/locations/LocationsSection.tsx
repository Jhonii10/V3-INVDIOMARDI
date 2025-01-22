'use client';

import { locationsRetailers, locationsWholesalers } from '@/models';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const LocationsSection = () => {

    const [state, setState] = useState(true);
    const route = useRouter();

    const getRouter = (direccion:string)=>{

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if(isMobile || isSafari){
            return route.replace(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`)
        }

        if (navigator.geolocation && !isMobile) {

            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
            

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    
                    const { latitude, longitude } = position.coords;

                    const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(direccion)}`;
                    
                    return window.open(url,'_black')    

                },(err)=>{
                    toast.error('No se pudo obtener tu ubicación. Mostrando solo la dirección.')
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`,'_black');
                    
                },options)
        }else{
            toast.error('Tu navegador no soporta geolocalización.')
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`);
        }

    }
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
        
        <div className='flex gap-4 flex-wrap justify-center mt-8'>
            {
                state ? 
                locationsWholesalers.map((item)=>(
                    <div
                        key={item.tienda}
                        className="relative flex flex-col justify-between border border-gray-200 shadow-lg rounded-lg p-6 bg-white w-full sm:w-80    "
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 truncate capitalize">
                          {item.tienda}
                        </h3>
                        <p className="text-sm text-gray-700 mt-1 break-words">
                          {item.direcion}
                        </p>
                        <p className='text-sm mt-2'>Telefono: {item.telefono}</p>
                        <p className="mt-3 text-sm text-gray-500">{item.horarios}</p>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => getRouter(item.ubicacion)}
                          className="inline-block rounded-lg bg-[var(--primary-color-300)] px-5 py-3 text-sm font-medium text-black hover:bg-[var(--primary-color-400)] transition-transform transform hover:scale-105"
                        >
                          Como llegar
                        </button>
                      </div>
                    </div>
                ))
                :locationsRetailers.map((item)=>(
                    <div
                        key={item.tienda}
                        className="relative flex flex-col justify-between border border-gray-200 shadow-lg rounded-lg p-6 bg-white w-full sm:w-80    "
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 truncate capitalize">
                          {item.tienda}
                        </h3>
                        <p className="text-sm text-gray-700 mt-1 break-words">
                          {item.direcion}
                        </p>
                        <p className='text-sm mt-2'>Telefono: {item.telefono}</p>
                        <p className="mt-3 text-sm text-gray-500">{item.horarios}</p>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => getRouter(item.ubicacion)}
                          className="inline-block rounded-lg bg-[var(--primary-color-300)] px-5 py-3 text-sm font-medium text-black hover:bg-[var(--primary-color-400)] transition-transform transform hover:scale-105"
                        >
                          Como llegar
                        </button>
                      </div>
                    </div>
                ))
            }

        </div>
    </div>
</section>
  )
}
