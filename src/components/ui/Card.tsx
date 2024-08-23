import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    category: string;
    name: string;
}
export const Card = ({category , name }:Props) => {

    const path = `/images/categories/${category}.png`;

  return (
    <div className="rounded-lg bg-gray-100 p-8">
      <Link href={`/categories/${category.toLowerCase()}`} >
          <div className='flex justify-center items-center'>
            <Image
                width={500}
                height={500}
                alt={category}
                src={path}
            
            />
          </div>
        <div className="mt-2 text-left">
          <div
            className=" text-lg w-full text-black font-bold"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
          <div className="py-2 w-full overflow-hidden text-ellipsis text-gray-600 leading-100 text-base">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </div>
        </div>
      </Link>
    </div>
  )
}