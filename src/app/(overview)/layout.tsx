import { Footer, Navbar, Sidebar } from "@/components";


export default function OverviewLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div >
    <Navbar/>
    <Sidebar/>
    <main>
    {children}
    </main>
    <Footer/>
    </div>
  );
}