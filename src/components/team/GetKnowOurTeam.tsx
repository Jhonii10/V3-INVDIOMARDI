import Image from 'next/image'
import React from 'react'

const team = [
    {
        name:'Andrea',
        position:'Gerente',
        image:'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti temporibus quis cum reiciendis, nam voluptatibus voluptate at rem ipsam explicabo sint reprehenderit nobis quas veniam quasi atque in enim?',
    },
    {
        name:'Pedro',
        position:'Ventas',
        image:'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti temporibus quis cum reiciendis, nam voluptatibus voluptate at rem ipsam explicabo sint reprehenderit nobis quas veniam quasi atque in enim?',
    },
    {
        name:'Nathalia',
        position:'Marketing',
        image:'https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti temporibus quis cum reiciendis, nam voluptatibus voluptate at rem ipsam explicabo sint reprehenderit nobis quas veniam quasi atque in enim?',
    },


]

export const GetKnowOurTeam = () => {
  return (
    <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                  Conoce nuestro equipo
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
                    {
                        team?.map(({name, position , bio,image})=>(
                            <div className=' rounded-xl shadow-md' key={name}>
                                <Image
                                width={720}
                                height={720}
                                src={image}
                                alt={name}
                                title={name}
                                data-is-loaded="true"
                                className='h-80 object-cover rounded-t-xl'
                                />
                                <div className="text-center border py-6 px-4 rounded-b-xl">
                                    <div className=" py-2 w-full overflow-hidden text-gray-500  text-lg">
                                        {bio}
                                    </div>
                                    <div className='text-lg font-semibold mt-4 capitalize'>
                                        {name} - {position}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    
                </div>
                </div>
    </section>
  )
}
