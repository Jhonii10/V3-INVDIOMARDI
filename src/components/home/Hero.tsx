import React from 'react'
import { Slider } from '../ui/Slider'
import { ButtonGetOutOfert } from '../ui/ButtonGetOutOfert'
import { MouseDown } from '../ui/MouseDown'
import Link from 'next/link'

const images = [
    'https://images.pexels.com/photos/1422292/pexels-photo-1422292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]


export const Hero = () => {
  return (
    <div className="relative w-full min-h-[calc(100*5.5px)] lg:lg:min-h-[calc(100*7.1px)] xl:min-h-screen flex flex-col items-start justify-center bg-[rgba(219,219,219,0.1)] py-24 lg:py-28">
        <div className=" mx-auto px-4   ">
          <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10  w-full h-full place-content-center "> 
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full mr-0 lg:mr-24">
              <div className=" inset-0 h-full w-full object-cover">
                    <Slider
                      images={images}
                      title="Imagenes"
                    />
              </div>
            </div> 
              <div className=" lg:max-w-lg lg:text-left ml-0 lg:ml-24  flex flex-col justify-center">
                <h1 className=" font-bold text-2xl lg:text-5xl text-center lg:text-left  ">
                    Importadora de productos 
                    <br />
                    al mayor y detal
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray text-center lg:text-left">
                    Deleite a sus clientes con productos sostenibles de calidad, a precios asequibles
                </p>
                
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"/>

                <>
                       <ButtonGetOutOfert/>
                       <div className='border border-grey-100 my-10'/>
                </> 
                <div className="flex justify-center items-center lg:justify-start"> 
                      <Link className="bg-[var(--primary-color-400)] hover:bg-[var(--primary-color-500)]  font-bold py-5 px-4 rounded-full focus:outline-none focus:shadow-outline" 
                            href='/categories'
                      >
                          Ver todas nuestras categorias
                      </Link>
                </div>
              </div>

            <MouseDown/>

            </div>
          </div>
      </div>
  )
}
