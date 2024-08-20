import { Navbar } from "@/components";

export default function OverviewLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pt-24">
    <Navbar/>
    <div className="px-4">
    {children}
    </div>
    </main>
  );
}