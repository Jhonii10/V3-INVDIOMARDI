import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { LuClock10 } from 'react-icons/lu'
import { MdLocalPhone } from 'react-icons/md'

export const ContactInformation = () => {
  return (
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8 ">
                  <div className="rounded-lg  p-6 border border-gray-300 text-center">
            
                    <div className='flex justify-center'>
                    <HiOutlineBuildingOffice2 size={30} />
                    </div>
                    
                    <h2 className='mt-4 font-bold'>Oficina principal</h2>
                    <p className="mt-4 text-gray-600">
                    Centro comercial paseo de la quinta Cl. 5 #46-83, Local 239
                    
                    </p>
                  
                  </div>

                  <div className="rounded-lg  p-6 border border-gray-300 text-center">

                    <div className='flex justify-center'>
                    <LuClock10 size={30} />
                    </div>
                    
                    <h2 className='mt-4 font-bold'>Horario de atencion</h2>
                    <p className="mt-4 text-gray-600">
                    Lunes a Viernes: 7am – 4pm Sábado: 8am – 1pm
                    
                    </p>
              
                  </div>

                  <div className="rounded-lg  p-6 border border-gray-300 text-center  break-words">
                    <div className='flex justify-center'>
                    <AiOutlineMail size={30} />
                    </div>
                    
                    <h2 className='mt-4 font-bold'>Correo electronico</h2>
                    <p className="mt-4 text-gray-600">
                      <Link href={'mailto:inversionesdiomardi@gmail.com'}>inversionesdiomardi@gmail.com</Link>
                    </p>
                  </div>

                  <div className="rounded-lg  p-6 border border-gray-300 text-center " >
                  
                    <div className='flex justify-center'>
                    <MdLocalPhone size={30} />
                    </div>
                    
                    <h2 className='mt-4 font-bold'>Telefonos</h2>
                    <p className="mt-4 text-gray-600">
                    (602) 5521230 <br/> 317 3705897
                    </p>
                    
                  </div>
               </div>
  )
}
