import { Navbar } from "@/components";

export default function OverviewLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main>
    <Navbar/>
    {children}
    </main>
  );
}