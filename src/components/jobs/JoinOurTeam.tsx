import Image from 'next/image'
import React from 'react'

export const JoinOurTeam = () => {
  return (
    <section>
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div className='flex flex-col justify-center rounded-xl px-10 sm:px-12 py-6 shadow-md '>
                    <h2 className='text-center sm:text-left text-2xl font-semibold mb-4'>Sé parte de algo grande</h2>
                    <p className='text-lg text-center sm:text-left'>En Inversiones Diomardi nuestro equipo nos hace grande. Descubre como puedes ser parte de este.</p>
                </div>
                <div className='rounded-xl'>
                        <Image
                            width={1280}
                            height={720}
                            src={'https://images.pexels.com/photos/5990042/pexels-photo-5990042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt={''}
                            className='rounded-xl'
                        />
                </div>
            </div>
        </div>
    </section>
  )
}
