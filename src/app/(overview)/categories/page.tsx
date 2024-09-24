import { BreadCrums, Jobs, ListCard } from "@/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias",
  description: ""
};

export default function CategoriesPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>  
      <h1 className="text-center text-2xl lg:text-4xl font-bold pt-6 my-4">Conoce Nuestras Categorias</h1>
      <ListCard/>
      <Jobs/>
    </div>
  );
}