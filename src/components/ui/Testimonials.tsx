import Link from 'next/link'
import React from 'react'
import { Card } from './Card'

const  bestCategories = [
  {
    category:'Hogar',
    name:'Si estás pensando en remodelar y agregar nuevos estilos en la decoración de tu hogar u oficina, el lugar ideal para encontrar: portarretratos, espejos, cuadros decorativos, floreros, adornos de cerámica, cortinas, alfombras y mucho más.'
  },
  {
    category:'Jugueteria',
    name:'Regálale a los más pequeños un mundo lleno de creatividad con nuestros juguetes para niñas, niños, bebés y enséñales de una forma divertida a aprender con nuestros juguetes didácticos o educativos.'
  },
  {
    category:'Cocina',
    name:'Cocinar es un arte en el que necesitas las herramientas perfectas para conquistar el paladar de tus seres queridos. Encuentra sartenes, ollas, tablas para picar y mucho más.'
  }
]


export const Testimonials = () => {
  return (
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-2xl lg:text-4xl font-bold tracking-tight ">
            Categorias destacadas
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {
              bestCategories?.map((item , index) => (
                <Card category={item.category} name={item.name} key={`${item.category}+${index}`}/>
              ))
            }
          </div>
          <div className='mt-24'>
              <div className={`
                    flex flex-row items-center justify-center
                    before:content-[''] before:block before:relative before:w-[40vw] before:h-[1px] before:bg-[var(--primary-color-200)]
                    after:content-[''] after:block after:relative after:w-[40vw] after:h-[1px] after:bg-[var(--primary-color-200)]
                `}>
                  <Link 
                    href='/categories'
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
