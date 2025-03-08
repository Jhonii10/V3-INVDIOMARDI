'use client'
import React from 'react';
import { Slider } from '../ui/Slider';
import { MouseDown } from '../ui/MouseDown';
import Link from 'next/link';
import { useFirstVisit } from '@/hooks';

const images = [
    'https://images.pexels.com/photos/1422292/pexels-photo-1422292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];



export const Hero = () => {
  
    const isFirstVisit = useFirstVisit('Hero');

    return (
        <div className="relative w-full min-h-[calc(100*5.5px)] lg:min-h-[calc(100*7.1px)] xl:min-h-screen flex flex-col items-start justify-center bg-[rgba(219,219,219,0.1)] py-24 lg:py-28">
            <div className="mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 w-full h-full place-content-center">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full mr-0 lg:mr-24">
                        <div className={`inset-0 h-full w-full object-cover animate__animated animate__animated ${isFirstVisit ? 'animate__bounceIn' : ''}`} style={{ animationDelay: '1s'}}>
                            <Slider
                                images={images}
                                title="Imagenes"
                            />
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:text-left ml-0 lg:ml-24 flex flex-col justify-center">
                        <h1 className={`font-bold text-2xl lg:text-4xl text-center lg:text-left text-[#003E4A] animate__animated ${isFirstVisit ? 'animate__zoomInDown' : ''}`} style={{ animationDelay: '0.5s' }}>
                            ¿Buscas productos al por mayor, precios bajos y proveedores confiables para tu negocio?
                        </h1>
                        <p className={`mt-6 text-lg leading-8 text-gray text-center lg:text-left animate__animated ${isFirstVisit ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: '1s' }}>
                        En <span className="font-semibold">Inversiones Diomardi</span> contamos con más de <span className="font-semibold">30 años de experiencia</span>, importamos productos de calidad y los ofrecemos a precios al por mayor sin intermediarios.
                        </p>
                        
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"/>

                        {/* <div className={`animate__animated ${isFirstVisit ? 'animate__fadeIn' : ''}`} style={{ animationDelay: '1.5s' }}>
                            <ButtonGetOutOfert />
                            <div className='border border-grey-100 my-10'/>
                        </div>  */}
                        <div className="flex justify-center items-center lg:justify-start"> 
                            <Link 
                                className={`bg-[#003E4A] hover:bg-[#002e37] text-white text-center font-bold py-5 px-4 rounded-full focus:outline-none focus:shadow-outline max-w-lg animate__animated ${isFirstVisit ? 'animate__bounceIn' : ''}`} 
                                href='/categories' 
                                style={{ animationDelay: '2s' }}
                            >
                                Explora nuestro catálogo y cotiza sin compromiso hoy
                            </Link>
                        </div>
                    </div>

                    <MouseDown />
                </div>
            </div>
        </div>
    );
};
