import { Feature, Hero, Jobs, Reviews, WhastappChat } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inversiones Diomardi",
  description: "sitio web oficial de la importadora inversiones diomardi",
};


export default function Home() {
  return (
    <>
       <Hero/>
       <WhastappChat/>
       <Feature/>
       <Jobs/>
       <Reviews/>
    </>
  );
}
