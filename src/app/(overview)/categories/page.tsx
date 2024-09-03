import { BreadCrums, Jobs, ListCard } from "@/components";

export default function CategoriesPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>  
      <h1 className="text-center text-2xl lg:text-4xl font-semibold pt-6">Conoce Nuestras Categorias</h1>
      <ListCard/>
      <Jobs/>
    </div>
  );
}