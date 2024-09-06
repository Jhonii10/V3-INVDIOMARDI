import { BreadCrums, Jobs, MisionAndVision, Origin, Recognitions, Reviews } from "@/components";

export default function AboutPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>  
      <div className=' pt-0 sm:pt-4 flex items-center justify-center'>
        <div className='px-4 md:px-8 lg:px-16 max-w-screen-lg '>
          <h1 className="text-left text-2xl lg:text-4xl font-bold pt-6 mb-10">¿Quienes somos?</h1>
          <Origin/>
          <hr className='mt-16' />
          <MisionAndVision/>
          <hr className='mt-16' />
        </div>
      </div>
      <Recognitions/>
      <Reviews/>
      <Jobs/>
    </div>
  );
}