import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import 'animate.css';
import { Toaster } from "react-hot-toast";

const quicksank = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inversiones Diomardi",
  description: "¿Buscas productos al por mayor, precios bajos y proveedores confiables para tu negocio? En Inversiones Diomardi contamos con más de 30 años de experiencia, importamos productos de calidad y los ofrecemos a precios al por mayor sin intermediarios.",
  applicationName: "Inversiones Diomardi",
  metadataBase: new URL("https://inversionesdiomardi-demo.vercel.app"), // URL base configurada
  alternates: {
    languages: {
      es: "español",
    },
  },
  openGraph: {
    title: "Inversiones Diomardi",
    description: "¿Buscas productos al por mayor, precios bajos y proveedores confiables para tu negocio? En Inversiones Diomardi contamos con más de 30 años de experiencia, importamos productos de calidad y los ofrecemos a precios al por mayor sin intermediarios.",
    images: ["/logo.svg"],
    url: "https://inversionesdiomardi-demo.vercel.app",
    siteName: "Inversiones Diomardi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
