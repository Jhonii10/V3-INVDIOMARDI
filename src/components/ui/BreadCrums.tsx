'use client'
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiOutlineHome } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';

export const BreadCrums = () => {

    const label = {
        'categories': 'categorias',
        'about':'¿quienes somos?',
        'contacts':'contactanos',
        'jobs':'oportunidades',
        'locations':'ubicaciones',
        'team':'nuestro equipo',
        'reviews':'reseñas',
        
    } as any;

    const router = usePathname();
    const pathnames = router.split('/').filter((x) => x).map((x) => decodeURIComponent(x)).map(x => label[x] || x)
    const reverseLabel = Object.fromEntries(Object.entries(label).map(([key, value]) => [value, key]));


   

  return (
    <nav className="flex text-gray-500 text-base px-6 md:px-12 lg:px-14 h-16 border-y border-black border-opacity-20">
      <ul className="flex items-center">
        <li>
          <Link href="/" className="hover:text-gray-700 ">
            <HiOutlineHome className="h-4 w-4"  />
          </Link>
        </li>
        {
          pathnames?.map((name, index) => {

            const routeTo = `/${pathnames.slice(0, index + 1).map(n => reverseLabel[n] || n).join('/')}`;
            const isLast = index === pathnames.length - 1;

          return (
            <ul 
                key={routeTo} 
                className={clsx('flex items-center', {
                    'font-bold': isLast,
                } )}>
            <li className='mx-1'>
                 <IoIosArrowForward className="h-4 w-4"/>
            </li>
              {isLast ? <p>{name}</p> : <Link href={routeTo} className="hover:text-gray-500 hover:font-bold">{name}</Link>}
            </ul>
          );
        })}
      </ul>
    </nav>
  )
}
