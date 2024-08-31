import { BreadCrums, Jobs, Reviews } from "@/components";

export default function AboutPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>  
      <h1 className="text-center text-2xl lg:text-4xl font-semibold pt-6">¿Quienes somos?</h1>
       {/*  Other seccions */}
      <Reviews/>
      <Jobs/>
    </div>
  );
}