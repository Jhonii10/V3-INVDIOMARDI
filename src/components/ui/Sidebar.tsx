'use client'

import { useUiStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Options } from './Options'
import { menuItemPhone } from '@/models'


export const Sidebar =  () => {
  
    const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen)
    const closeSideMenu = useUiStore((state) => state.closeSideMenu)
    
  
    useEffect(() => {
      if (isSideMenuOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }, [isSideMenuOpen]);



  
  return (
    <> 
        
       {
        isSideMenuOpen && 
        <>
            <div
                className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 '
                
            />
            <div
                className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                onClick={closeSideMenu}
            />
        </>
        }
            <nav
                className={
                    clsx(
                    "fixed right-0 top-0  w-full sm:w-2/3 h-screen bg-white z-20 shadow-2xl transform transition-all duration-500",
                    {
                        "translate-x-full": !isSideMenuOpen,
                        "overflow-scroll":isSideMenuOpen
                    }
                    )
                }
            >
                <div
                    className='flex flex-row justify-end items-center h-24 px-6 lg:px-14 mb-2'

                >
                    
                    <button 
                        className="appearance-none border-0 p-0 cursor-pointer flex lg:hidden flex-row items-center justify-center w-12 h-12 bg-cyan-200 rounded-full text-black"
                         onClick={closeSideMenu}
                        >
                        {<IoCloseOutline size={25} />}
                    </button>
                </div>

                <div className='px-9'>
                    <p className='text-center text-xl font-semibold mb-4'>Recursos</p>
                    <Options data={menuItemPhone} optionMenu={closeSideMenu}/>
                </div>

                <ul className=' list-none flex flex-col items-center justify-center border-t border-b border-gray-500 py-8 my-8'>
                    <li
                        className='text-lg'
                    >
                        <Link
                            href="/about"
                            onClick={closeSideMenu}
                        >
                                ¿Sobre nosotros?
                        </Link>
                    </li>
                    <li
                     className='text-lg mt-4'
                    >
                        <Link
                            href="/contacts"
                            onClick={closeSideMenu}
                        >
                                Contactanos
                        </Link>
                    </li>
                </ul>




                {/* menu */}

            </nav>
        
    </>
  )
}
