'use client'
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import Image from 'next/image';

interface Props {
    images:string[];
    title:string;
    className?:string;
}

export const Slider = ({images,title,className}:Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    

  return (
    <>
    <Swiper
    style={{
        '--swiper-navigation-color': 'var(--primary-color-300)' ,
        '--swiper-pagination-color': 'var(--primary-color-300)',
      } as React.CSSProperties}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      
      autoplay={{
        delay: 2500,
      }}
      navigation={true}
      
      thumbs={{ swiper: thumbsSwiper}}
      modules={[FreeMode, Navigation, Thumbs , Pagination, Autoplay]}
      className="mySwiper2"
    >
      {
        images.map((image)=>(
            <SwiperSlide key={image} style={{borderRadius:'0.5rem'}}>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className='rounded-lg '
                />
            </SwiperSlide>
        ))
      }
    </Swiper>
    </>
  )
}
