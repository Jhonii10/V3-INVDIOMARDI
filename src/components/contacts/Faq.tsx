import React from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'

export const Faq = () => {
  return (
    <div className='mt-16 text-center px-0 md:px-6 '>
        <h2 className='text-2xl font-semibold mt-8'>Preguntas frecuentes</h2>
        <div className="space-y-4 mt-8">
          {
            [1,2,3].map(item => (
              <details
              className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              key={item}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing?
                </h2>
                <span className="relative size-5 shrink-0">
                  
                  <CiCirclePlus
                    className='absolute inset-0 size-6 opacity-100 group-open:opacity-0 transition-opacity duration-300 ease-in-out'
                  />
                  <CiCircleMinus
                    className='absolute inset-0 size-6 opacity-0 group-open:opacity-100 transition-opacity duration-300 ease-in-out'
                  />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700 text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                earum similique!
              </p>
            </details>
            ))
          }
        
        </div>
  </div>
  )
}
