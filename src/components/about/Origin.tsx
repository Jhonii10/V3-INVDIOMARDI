import Image from 'next/image'
import React from 'react'

export const Origin = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Image
            width={500}
            height={500} 
            alt="Laptop" 
            src="https://images.pexels.com/photos/5546853/pexels-photo-5546853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="h-full w-full rounded-xl object-cover"
        />
        <div>
            <h2 className="text-left text-3xl font-semibold"> Origen</h2>
            <p className="mt-4 text-base text-gray-500 text-left"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugiat consequuntur, voluptatum quasi sint distinctio quisquam rem explicabo, velit quis molestias soluta minus exercitationem sequi ipsum molestiae, odit ab incidunt! </p>
        </div>
    </div>
  )
}
