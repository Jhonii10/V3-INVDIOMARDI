import React, { useRef } from 'react'
import { Options } from '../ui/Options'
import { menuItem } from '@/models'
import { Testimonials } from '../ui/Testimonials'

export const Feature = () => {

  return (
    <div className='px-4 lg:px-16' id='resources' >
                <div className='mt-12'  >
                <h2 className='text-center text-2xl lg:text-4xl font-semibold'>Recursos</h2>
                <div className=' mt-12'>
                    <Options data={menuItem}/>
                    <Testimonials/>
                </div>
                </div>

    </div>
  )
}
