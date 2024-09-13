import { BreadCrums, Jobs } from "@/components";
import reviews from "@/models/reviews";
import Image from "next/image";

export default function ReviewsPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>
      <section className='pt-0 md:pt-8 flex items-center justify-center'>
        <div className='px-6 md:px-16 lg:px-32 max-w-6xl '>
        <h1 className="text-center text-3xl lg:text-4xl font-bold pt-6">Reseñas</h1>
          {
            reviews.map(review =>
               <div className="mt-8 flex flex-col lg:flex-row gap-4 pb-8 border-b-[2px]" key={review.nombre}>
                <div className='lg:flex items-center w-full lg:w-2/5 justify-center hidden ' >
                    <Image
                        src={review.img}
                        alt={review.nombre}
                        height={250}
                        width={250}
                        className="h-20 w-28 rounded-xl object-contain"

                    />

                </div>
                <div className='w-full'>
              
                 <div className='flex items-center'>
                    <Image
                        src={review.img}
                        alt={review.nombre}
                        height={250}
                        width={250}
                        className="h-16 w-16 rounded-xl object-contain lg:hidden"

                    />

                <div className='text-left pl-4 lg:pl-0'>
                    <h2 className='font-semibold text-lg'>{review.nombre}</h2>
                    <data className="text-sm">{review.fecha}</data>
                </div>
                </div>
                <p className="mt-4 text-base     text-gray-500 text-left">{review.reseña}</p>
              </div>  
               </div>
               
            )

          }
        </div>
      </section>
      <Jobs/>
    </div>
  );
}