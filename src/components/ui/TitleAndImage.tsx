import React from 'react'

interface Props {
    url: string,
    children: React.ReactNode,
}

export const TitleAndImage = ({url , children}:Props) => {
  return (
    <section className='mt-8'>
        <div className='flex justify-center items-center content-center flex-wrap max-w-6xl m-auto px-8 lg:px-0 '>
            <div 
                className={`h-80 bg-cover bg-center bg-no-repeat
                            flex items-center justify-center rounded-3xl w-full relative
                `}
                style={{
                    backgroundImage : `url(${url})`
                }}
                >
                <div className='opacity-100 bg-gradient-to-b from-transparent to-[var(--primary-color-300)] h-full w-full absolute left-0 top-0 rounded-3xl'/>
                {children}
            </div>
        </div>
    </section>
  )
}
