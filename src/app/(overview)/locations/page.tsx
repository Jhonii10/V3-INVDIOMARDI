import { BreadCrums, Jobs, LocationsSection, Reviews, TitleAndImage } from "@/components";

export default function LocationsPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>
      <>
      <TitleAndImage 
          url={"https://images.pexels.com/photos/11815580/pexels-photo-11815580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        >
          <h1 className='text-left text-2xl lg:text-4xl font-bold text-white drop-shadow-md'>Ubicaciones</h1>
        </TitleAndImage>
      </>
      <LocationsSection/>
      <Jobs/>
      <Reviews/>
       
    </div>
  );
}