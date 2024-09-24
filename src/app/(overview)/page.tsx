import { Feature, Hero, Jobs, Reviews } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inversiones Diomardi",
  description: "sitio web oficial de la importadora inversiones diomardi",
};


export default function Home() {
  return (
    <>
       <Hero/>
       <Feature/>
       <Jobs/>
       <Reviews/>
    </>
  );
}
