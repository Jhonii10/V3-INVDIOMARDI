import { BreadCrums, GetKnowOurTeam, TitleAndImage,  } from "@/components";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>
      <div>
        <TitleAndImage 
          url={"https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        >
          <h1 className='text-left text-2xl lg:text-4xl font-bold text-white drop-shadow-md'>Nuestro equipo</h1>
        </TitleAndImage>
        <GetKnowOurTeam/>
        <TitleAndImage 
          url={"https://images.pexels.com/photos/6774439/pexels-photo-6774439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        >
          <div className="flex flex-col justify-center items-center text-center gap-2">
            <h2 className='text-center text-2xl lg:text-4xl font-bold text-white drop-shadow-md'>Se parte de Inversiones Diomardi</h2>
            <p className="text-lg text-white drop-shadow-lg">Explora nuestras oportunidades laborales</p>
            <Link 
              href={'/jobs'}
              className="z-[1] px-10 py-4 bg-[var(--primary-color-400)] rounded-full font-semibold text-lg"
              >
              Aplicar
            </Link>
          </div>
        </TitleAndImage>
      </div>

    </div>
  );
}