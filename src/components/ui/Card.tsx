import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    category: string;
    name: string;
}
export const Card = ({category , name }:Props) => {

    const path = `/images/categories/${category.replace(/\s+/g, '')}.png`;

  return (
    <div className="rounded-xl bg-gray-100 p-8 hover:shadow-[0_0_26px_0_rgba(0,0,0,0.25)] hover:z-[1] group ">
      <Link href={`/categories/${category.toLowerCase().replace(/\s+/g, '')}`}  >
          <div className='flex justify-center items-center '>
            <Image
                width={500}
                height={500}
                alt={category}
                src={path}
                className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            
            />
          </div>
        <div className="mt-2 text-left">
          <div
            className=" text-lg w-full text-black font-bold"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
          <div className="py-2 w-full overflow-hidden text-ellipsis text-gray-600 leading-100 text-base max-h-14 whitespace-nowrap ">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </div>
        </div>
      </Link>
    </div>
  )
}
