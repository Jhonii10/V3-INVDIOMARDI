import React from 'react'
import { IconFacebook, IconInstagram, IconWhastapp, IconX } from '../icons'
import Link from 'next/link'

const styles = `inline-flex items-center justify-center h-12 w-12 border border-[#1c1e21] rounded-full box-border text-[#1c1e21] hover:text-white hover:border-none cursor-pointer overflow-hidden p-0 relative transition-[color,border-color,background-color] duration-[0.33s] delay-[0.5s] ease-out align-bottom z-[1]
                after:content-['']  after:rounded-full after:w-[67px] after:h-[67px] after:absolute after:top-0 after:transform after:scale-100 after:translate-y-[67px] after:transition-transform after:duration-[1s] after:ease-[cubic-bezier(.66,.00,.34,1.00)] after:z-[-1]
                hover:after:transform hover:after:scale-[1.47] hover:after:translate-y-0`

export const RedesSociales = () => {
  return (
    <div className='flex gap-2'>
        <Link
          href={'/#'}
          className={`${styles} after:bg-black  `}
        >
          <IconX/>
        </Link>
        <Link
          href={'/#'}
          className={`${styles} after:bg-green-500 `}
          >
          <IconWhastapp/>
        </Link>
        <Link
          href={'/#'}
          className={`${styles} after:bg-gradient-to-r after:from-[#833ab4] after:via-[#ff5b5b] after:to-[#fcaf45] `}
         >
          <IconInstagram/>
        </Link>
        <Link
          href={'/#'}
          className={`${styles} after:bg-blue-500 `}
          >
          <IconFacebook/>
        </Link>
    </div>
  )
}
