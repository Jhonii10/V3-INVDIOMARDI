import { Earnings, Jobs } from "@/components";
import ButtonGetCatalog from "@/components/ui/ButtonGetCatalog";
import { categories } from "@/models";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params:{
        category: string
    }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const category = params.category;
  const data = categories.find(
    (item) => item.route?.toLowerCase() === category.toLowerCase()
  );

 
  return {
    title: `Categoria - ${data?.name}` || 'Categoria no encontrada',
    description: data?.Description || "Explora nuestra categoría de productos",
    openGraph: {
      title: data?.name || 'Categoría',
      description: data?.Description || "Explora nuestra categoría de productos",
      images: [`/images/categories/${category.replace(/\b\w/g, (c) => c.toUpperCase())}.png`],
    },

  }

}



export default function CategoryPage({params}:Props) {

  const {category} = params;
    
  const path = `/images/categories/${category.replace(/\b\w/g, c => c.toUpperCase())}.png`;

  console.log('path',path);
  
  
  const data = categories.find(item => item.route?.toLowerCase() === category.toLowerCase());

  if(!data)
  {
    notFound()
  }

  return (
    <div className="pt-24">
      <div className={`relative flex flex-col justify-between min-h-[calc(100vh-96px)] bg-[#f6f6f7] p-4`}>
        <section className="relative z-[1] max-w-sm text-lg mb-4">
        <div className="text-left">
            <Link 
                className={`relative inline-block no-underline leading-[120%] text-[#9d9d9d] transition-colors duration-[350ms] ease text-left text-base pb-3 hover:text-black
                            after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current
                    `} 
                href={`/categories`}>
                Categorias
            </Link>
        </div>
        <h1 className="capitalize mt-4 text-2xl font-bold mb-0 md:mb-4 ">{data.name}</h1>
        <p className="hidden lg:block ">{data?.Description}</p>
        </section>
        <div className="relative lg:absolute top-0 left-0 lg:left-12 w-full  lg:w-[calc(100%-2.5rem*2)] xl:w-[calc(100%-3.75rem*2)] pt-[100%] lg:p-0 h-full z-0">
            <div>
            <Image
                src={path}
                alt={category}
                height={1000}
                width={1000}
                className="block absolute top-0 left-0 w-full h-full object-contain "
            />
            </div>
        </div>
        <div className="relative max-w-[100%] lg:max-w-sm text-center md:text-left   ">
        <p className="block lg:hidden mb-6">{data?.Description}</p>
        <span className="text-sm">*La disponibilidad de nuestro inventario está sujeta a existencias y rotación de ventas en cada una de nuestras sucursales.</span>
        </div>
        <div className="relative lg:absolute bottom-0 lg:bottom-[calc(77*7.74px*0.05)] right-0 lg:right-9 w-full lg:w-4/12 p-4 lg:p-0">
            <ButtonGetCatalog catalog={category}/>
        </div>
      </div>
      
      <Earnings/> 
      <Jobs/>
    </div>
  );
}