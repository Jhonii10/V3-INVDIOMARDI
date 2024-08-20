import { MenuItem } from '@/interfaces';
import Link from 'next/link';
import React, { ReactElement } from 'react'


interface Props {
  data: MenuItem[];
  optionMenu?: ()=>void;
}

export const Options = ({data , optionMenu}:Props) => {
  return (
    <ul className='p-0 list-none flex flex-row items-center justify-center flex-wrap -mt-[1.25rem]'>
                                {
                                    data?.map((item , index) => (
                                        <li key={index} className='mx-3 sm:mx-9 mt-7 sm:mt-4 text-center'>
                                            <Link
                                                href={item.link}
                                                className='relative flex flex-col items-center justify-center no-underline text-current translate-z-0  min-w-12 md:min-w-[8rem] max-w-[12.5rem] pb-[0.625rem] styles_link___3_ON'
                                                onClick={optionMenu}
                                                >
                                                <div className='relative '>
                                                    {item.icon}
                                                </div>
                                                <div className='mt-3 text-sm font-medium'>
                                                    {item.name}
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                                
                            </ul>
  )
}
