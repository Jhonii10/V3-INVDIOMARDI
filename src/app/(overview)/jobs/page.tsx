import { BreadCrums, JobsOffert, JoinOurTeam, TitleAndImage } from "@/components";

export default function JobsPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>  
      <div>
      <TitleAndImage 
          url={"https://images.pexels.com/photos/5716006/pexels-photo-5716006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        >
          <h1 className='text-left text-2xl lg:text-4xl font-bold text-white drop-shadow-md'>Oportunidades</h1>
        </TitleAndImage>
        <JoinOurTeam/>
        <JobsOffert/>
      </div>
    </div>
  );
}