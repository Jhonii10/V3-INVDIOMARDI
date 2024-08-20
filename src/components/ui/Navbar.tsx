'use client';

import clsx from 'clsx';
import Link from 'next/link'
import React, { useState } from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { PiGridFourLight, PiSuitcaseSimpleThin, PiUsersThreeLight } from 'react-icons/pi';



const DATA = [
    {
        name: 'Categorias',
        icon: <PiGridFourLight  size={76} color='#85eae8'   />,
        link: '/categories',

    },
    {
        name: 'Ubicaciones',
        icon: <CiLocationArrow1 size={76} color='#85eae8' />,
        link: '/locations',

    },
    {
        name: 'Nuestro equipo',
        icon: <PiUsersThreeLight size={76} color='#85eae8'/>,
        link: '/team',

    },
    {
        name: 'Oportunidades',
        icon: <PiSuitcaseSimpleThin size={76} color='#85eae8' />,
        link: '/jobs',

    },
    
    
]

export const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <header className='absolute z-10 top-0 left-0 w-full h-24 px-6 md:px-14 flex flex-row items-center justify-between bg-white '>
        <div className='flex flex-row items-center justify-center'>
            <Link href={'/'} className='font-bold text-base'>
                Inversiones Diomardi
            </Link>
            <ul className='m-0 md:ml-8 p-0 list-none hidden lg:flex  flex-row items-center justify-center '>
                <li 
                    className='flex flex-row items-center justify-center h-24'
                    onMouseEnter={()=>setIsDropdownOpen(true)}
                    onMouseLeave={()=>setIsDropdownOpen(false)}
                    >
                    <Link href={'/resources'}
                        
                    >
                        <span
                            className={`relative inline-block pr-[1.125rem] after:content-[''] after:block after:absolute after:top-1/2 after:right-0 after:-mt-[0.1875rem] after:w-[0.625rem] after:h-[0.375rem] after:bg-[url('/images/arrow.svg')] after:bg-center after:bg-no-repeat after:bg-contain`}
                            
                        >
                            Recursos
                        </span>
                    </Link>
                    <div
                        className={clsx(
                            `absolute z-10 top-full left-0 w-full bg-cyan-100 py-16 px-10 transition-all duration-500 ease-linear
                             before:content-[''] before:block before:absolute before:z-1 before:top-[-0.375rem] before:left-[var(--left-space)] before:-ml-[0.375rem] before:w-[0.75rem] before:h-[0.75rem] before:bg-cyan-100 before:rotate-45
                            `,
                            {
                                'opacity-100 visible translate-y-0': isDropdownOpen,
                                'opacity-0 invisible translate-y-6': !isDropdownOpen
                            }
                        )}
                        style={{ '--left-space': '284.44375228881836px' } as React.CSSProperties}
                    >
                       <div>
                            <ul className='p-0 list-none flex flex-row items-start justify-center flex-wrap -mt-[1.25rem]'>
                                {
                                    DATA?.map((item , index) => (
                                        <li key={index} className='mx-9 mt-7 text-center'>
                                            <Link
                                                href={item.link}
                                                className='relative flex flex-col items-center justify-center no-underline text-current translate-z-0 min-w-[8rem] max-w-[12.5rem] pb-[0.625rem] styles_link___3_ON'
                                            >
                                                <div className='relative '>
                                                    {item.icon}
                                                </div>
                                                <div className='mt-3 text-sm font-medium'>
                                                    {item.name}
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                       </div>
                    </div>
                </li>
                <li className='ml-4'>
                    <Link href={'/about'}>
                        <span >
                            ¿Quienes somos?
                        </span>
                    </Link>
                </li>
                <li className='ml-4'>
                    <Link href={'/contacts'}>
                        <span>Contactanos</span>
                    </Link>
                </li>

            </ul>
        </div>

        <div className='flex flex-row items-center justify-center '>
            <Link 
                href={'tel:+573206795065'} 
                className='hidden md:inline-block text-sm leading-[200%] text-black no-underline transition-colors duration-300 ease-0 '
                >
                    +573206795065
            </Link>
            <button
                className='relative flex flex-row items-center justify-center w-12 h-12 text-black transition-colors duration-[350ms] ease-0'
                >
                    {<IoSearchOutline size={24} />}
            </button>
            <button className="appearance-none border-0 p-0 cursor-pointer flex lg:hidden flex-row items-center justify-center w-12 h-12 bg-cyan-200 rounded-full text-black">
                {<IoMenuOutline size={20} />}
            </button>
        </div>

    </header>
  )
}
