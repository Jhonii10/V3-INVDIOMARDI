import reviews from '@/models/reviews'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Reviews = () => {
  return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                  Reseñas de clientes
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                {
                    reviews.map(review => <div className=" p-8 " key={review.nombre}>
                    <div className='flex items-center justify-center'>
                    <Image
                    width={60}
                    height={60}
                    src={review.img}
                    alt={review.nombre}
                    data-is-loaded="true"
                    className='min-h-16 object-contain'
                    />
                    </div>
                    <div className="mt-2 text-center">
                    <div className="text-base w-full text-black font-bold" aria-hidden="true">{review.nombre}
                    </div>
                    <div>{review.fecha}</div>
                    <div className=" py-2 w-full overflow-hidden text-gray-500  text-md">{review.reseña}</div>
                    </div>
                    </div>
                        
                    )
                }
                </div>
                <div className='mt-4'>
                    <div className={`
                        flex flex-row items-center justify-center
                        before:content-[''] before:block before:relative before:w-[40vw] before:h-[1px] before:bg-[var(--primary-color-200)]
                        after:content-[''] after:block after:relative after:w-[40vw] after:h-[1px] after:bg-[var(--primary-color-200)]
                    `}>
                    <Link 
                        href='/reviews'
                        className="inline-flex flex-row items-center justify-center text-center bg-[var(--primary-color-300)] border-[var(--primary-color-300)] hover:bg-[var(--primary-color-400)] cursor-pointer font-bold rounded-full p-6 mx-7 min-w-40 "
                    >
                        Ver Mas
                    </Link>
                </div>
                </div>
            </div>
        </section> 
  )
}
