'use client';

import { useFirstVisit } from '@/hooks';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbBrandWhatsapp } from 'react-icons/tb';

export const WhastappChat = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
      setIsOpen(!isOpen);
    };

    const message = '¡Hola! Necesito asesoría Inversiones Diomardi';

    const isFirstVisit = useFirstVisit('MouseDown');

  
    return (
      <div className={clsx("fixed bottom-4 right-4 z-50",{
        'animate__animated animate__fadeIn': isFirstVisit
      })}
      style={{ animationDelay: '3s' }}
      >
        {/* WhatsApp Button */}
        <button
          onClick={toggleChat}
          aria-label="Abrir chat de WhatsApp"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <TbBrandWhatsapp size={30} />
        </button>
  
        {/* Chat Modal */}
        {isOpen && (
          <div className="fixed sm:absolute bottom-20 sm:bottom-16 right-0 w-full sm:w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {/* Header con onda */}
            <div className="relative bg-green-500 p-4" style={{
              borderImageSource: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 24 150 28\"%3E%3Cdefs%3E%3Cpath id=\"gentle-wave\" d=\"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z\"%3E%3C/path%3E%3C/defs%3E%3Cg%3E%3Cuse xlink:href=\"%23gentle-wave\" x=\"30\" y=\"3\" fill=\"%23fff\"%3E%3C/use%3E%3C/g%3E%3C/svg%3E')",
              borderImageSlice: "0 0 100%",
              borderBottom: "solid 16px"
            }}>
              <button
                onClick={toggleChat}
                aria-label="Cerrar chat"
                className="absolute top-4 right-3 text-gray-500 hover:text-gray-700 transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <IoIosCloseCircleOutline size={30} />
              </button>
              
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">¡Hola! 👋</h2>
                <p className="text-gray-600 text-base">Gracias por escribir a Inversiones diomardi</p>
              </div>
            </div>

            <div className='min-h-36'/>
  
            {/* Footer */}
            <div className="p-4 bg-white text-center items-center">
              <Link
                target='blank'
                href={`https://api.whatsapp.com/send?phone=573135667699&text=${message}`}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                onClick={toggleChat}
              >
                Iniciar conversación
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  };