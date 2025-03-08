import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    name: string;
    route: string;
    description: string;
}

const sanitizeRoute = (route: string) => {
  return route.trim().toLowerCase().replace(/\s+/g, '-');
};

export const Card = ({ name , route , description }:Props) => {

    const sanitizedRoute = sanitizeRoute(route);
    const path = `/images/categories/${sanitizedRoute.replace(/\b\w/g, c => c.toUpperCase())}.png`;
    const href = `/categories/${sanitizedRoute}`;
    
    
  return (
    <div className="rounded-xl bg-gray-100 p-8 hover:shadow-[0_0_26px_0_rgba(0,0,0,0.25)] hover:z-[1] group ">
      <Link href={href} title={`Explorar categoría ${name}`} >
          <div className='flex justify-center items-center '>
            <Image
                width={500}
                height={500}
                alt={name}
                src={path}
                className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
  
            />
          </div>
        <div className="mt-2 text-left">
          <div
            className=" text-lg w-full text-black font-bold"
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </div>
          <div className="py-2 w-full overflow-hidden text-ellipsis text-gray-600 leading-100 text-base max-h-14 whitespace-nowrap ">
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </div>
        </div>
      </Link>
    </div>
  )
}
