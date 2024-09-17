import { Footer, Navbar, Search, Sidebar } from "@/components";


export default function OverviewLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div >
    <Navbar/>
    <Sidebar/>
    <Search/>
    <main >
    {children}
    </main>
    <Footer/>
    </div>
  );
}