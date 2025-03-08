'use client'
import { menuItem } from '@/models'
import Link from 'next/link'
import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { MdOutlineMail } from 'react-icons/md'
import { RedesSociales } from './RedesSociales'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { IconLogo } from '../icons'
import Image from 'next/image'

export const Footer = () => {

  const pathname = usePathname();
  return (
    <footer className="bg-white mt-8">
    <div className="mx-auto max-w-screen-xl px-4 pb-6  sm:px-6 lg:px-8 ">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Image
                src="/images/logo.png"
                alt="Logo"
                width={140}
                height={42}
                priority
            />
          </div>
          <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
          En Inversiones Diomardi contamos con más de 30 años de experiencia, importando productos de calidad.
          </p>
          <ul className="mt-8 flex justify-center gap-4 sm:justify-start md:gap-8">
            <RedesSociales/>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Recursos</p>
            <ul className="mt-8 space-y-4 text-sm">
            {
              menuItem.map(menuItem => 
                <li key={menuItem.name}>
                <Link className={clsx("text-gray-700 transition hover:text-gray-700/75",{
                  "font-semibold": pathname === menuItem.link
                })} href={menuItem.link}>
                      {menuItem.name}
                </Link>

                </li>
              )
            }
            <li>
                <Link className={clsx("text-gray-700 transition hover:text-gray-700/75",{
                  "font-semibold": pathname === '/privacity'
                })} href={'/privacity'}>
                      Privacidad y tratamiento de datos
                </Link>

                </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Contacto</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href={'mailto:inversionesdiomardi@gmail.com'} 
                >
                  
                  <MdOutlineMail className='h-5 w-5 shrink-0 text-gray-900' />
                  <span className="flex-1 text-gray-700">inversionesdiomardi@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href={'tel:+573206795065'} 
                >
                  <FiPhone  className="h-5 w-5 shrink-0 text-gray-900" />
                  <span className="flex-1 text-gray-700">+573164682528</span>
                </Link>
              </li>
              <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                
                <GoLocation className="h-5 w-5 shrink-0 text-gray-900" />
                <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                  Cali, Valle del cauca, Colombia
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-100 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">

          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
             Inversiones Diomardi © {new Date().getFullYear()} Todos los derechos reservados
          </p>

          <div className='flex justify-center text-xs sm:text-sm'>
            Contruido con ❤️ por {' '}
            <Link 
                href={'https://www.jhoniipia.com'}
                className='hover:font-bold mx-1'
                target='_blank'
            >
                Jhoni ipia
            </Link>
        </div>

        </div>
      </div>
    </div>
  </footer>
  )
}
