import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksank = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inversiones Diomardi sas",
  description: "sitio web oficial de la importadora inversiones diomardi sas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksank.className}>{children}</body>
    </html>
  );
}
