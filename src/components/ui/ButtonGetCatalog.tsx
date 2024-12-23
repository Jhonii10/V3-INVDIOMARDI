import Link from 'next/link'
import React from 'react'
import { TbBrandWhatsapp } from 'react-icons/tb';

export default function ButtonGetCatalog({catalog}:{catalog:string}) {


  const message:string = `¡Hola! Inversiones Diomardi visite su sitio web y estoy interesado en el catalogo de ${catalog}`

  return (
    <>
      <Link 
        href={`https://api.whatsapp.com/send?phone=573135667699&text=${message}`}
        target='blank' 
        className='bg-green-500 rounded-full p-2 flex flex-row hover:bg-green-600 text-white hover:font-semibold text-center items-center justify-center gap-2'
        >
        <TbBrandWhatsapp size={30} />
        <span>
          Contactar por WhatsApp
        </span>

      </Link>
    </>
  )
}
