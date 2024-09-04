import { ButtonGetOutOfert, Jobs } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface Props {
    params:{
        category: string
    }
}

export default function CategoryPage({params}:Props) {

    const {category} = params;
    const path = `/images/categories/${category.replace(/\s+/g, '')}.png`;

  return (
    <div className="pt-24">
      <div className={`relative flex flex-col justify-between min-h-[calc(77*7.74px)] bg-[#f6f6f7] p-4`}>
        <section className="relative z-[1] ">
        <div className="text-left">
            <Link 
                className={`relative inline-block no-underline leading-[120%] text-[#9d9d9d] transition-colors duration-[350ms] ease text-left text-base pb-3 hover:text-black
                            after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current
                    `} 
                href={`/categories`}>
                Categorias
            </Link>
        </div>
        <h1 className="capitalize mt-4 text-xl font-semibold">{category}</h1>
        </section>
        <div className=" top-0 w-[calc(100%-2.5rem)*2] h-full z-0">
            <div>
            <Image
                src={path}
                alt={category}
                height={1200}
                width={1200}
                className="block absolute top-0 left-0 w-full h-full object-contain "
            />
            </div>
        </div>
        <div className="absolute bottom-[calc(77*7.74px*0.05)] right-0 lg:right-9 w-full lg:w-4/12 p-4 lg:p-0">
            <ButtonGetOutOfert/>
        </div>
      </div> 
      <Jobs/>
    </div>
  );
}