import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import 'animate.css';
import { Toaster } from "react-hot-toast";

const quicksank = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inversiones Diomardi",
  description: "sitio web oficial de la importadora inversiones diomardi sas",
  applicationName: 'Inversiones Diomardi',
  openGraph: {
    title: 'Inversiones Diomardi',
    description: 'Importadora de productos al mayor y detal',
    images:['/logo.svg', ],
    url: 'https://inversionesdiomardi-demo.vercel.app',
    siteName: 'Inversiones Diomardi',
    locale: 'es_ES',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksank.className}>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
        {children}
      </body>
    </html>
  );
}
