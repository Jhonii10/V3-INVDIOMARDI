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

export const Footer = () => {

  const pathname = usePathname();
  return (
    <footer className="bg-white mt-8">
    <div className="mx-auto max-w-screen-xl px-4 pb-6  sm:px-6 lg:px-8 ">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start">

          <svg
              xmlns="http://www.w3.org/2000/svg"
              version={'1.0'}
              width={50}
              height={50}
              viewBox="0 0 283.000000 298.000000"
              preserveAspectRatio="xMidYMid meet"
            >
            <title>Logo</title>
              <g
                transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path d="M1000 2506 l0 -236 264 0 c286 0 370 -9 485 -55 249 -97 421 -297 487 -565 17 -71 17 -269 0 -340 -55 -221 -177 -390 -366 -505 -159 -96 -263 -115 -621 -115 l-249 0 0 -235 0 -235 279 0 c366 0 475 16 670 97 208 86 404 240 541 427 210 287 285 675 199 1035 -57 236 -171 435 -350 607 -174 167 -335 257 -579 321 -90 24 -112 26 -427 30 l-333 5 0 -236z" fill='#263272'/>
                <path d="M330 2500 l0 -230 250 0 250 0 0 230 0 230 -250 0 -250 0 0 -230z" fill='#e65100'/>
                <path d="M330 1150 l0 -930 250 0 250 0 0 930 0 930 -250 0 -250 0 0 -930z" fill='#26c6da'/>
              </g>
            </svg>
          </div>
          <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
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
                  <span className="flex-1 text-gray-700">+573206795065</span>
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
