import { BreadCrums, TitleAndImage,  } from "@/components";

export default function TeamPage() {
  return (
    <div className="pt-24"  >
      <BreadCrums/>
      <div>
        <TitleAndImage 
          url={"https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          title="Nuestro equipo"
        />
      </div>

    </div>
  );
}