import { BreadCrums, ContactInformation, Faq, FormContact, Jobs } from "@/components";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos",
  description: ""
};

export default function ContactsPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>
      <div className='pt-0 md:pt-10 flex items-center justify-center'>
        <div className='px-4 md:px-16 lg:px-32 max-w-6xl '>
        <h1 className="text-center text-2xl lg:text-4xl font-bold pt-6">Contactanos</h1>
        <ContactInformation/>
        <FormContact/>
        <Faq/>
        </div>
      </div>
      <Jobs/>
    </div>
  );
}