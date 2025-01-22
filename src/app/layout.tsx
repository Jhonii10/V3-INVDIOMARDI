import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import 'animate.css';
import { Toaster } from "react-hot-toast";

const quicksank = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inversiones Diomardi",
  description: "Sitio web oficial de la importadora Inversiones Diomardi S.A.S.",
  applicationName: "Inversiones Diomardi",
  metadataBase: new URL("https://inversionesdiomardi-demo.vercel.app"), // URL base configurada
  alternates: {
    languages: {
      es: "español",
    },
  },
  openGraph: {
    title: "Inversiones Diomardi",
    description: "Importadora de productos al mayor y detal",
    images: ["/images/logo.png"],
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
