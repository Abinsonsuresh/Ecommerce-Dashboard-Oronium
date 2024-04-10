import MainHome from "@/Pages/Home/Main/MainHome";
import Sidebar from "@/components/Sidebar/Main/Sidebar";
export default function Home() {
  return (
    <div>
      <div className="flex flex-row overflow-hidden">
        <div className='hidden md:block sticky bottom-0'>
          <Sidebar />
        </div>

        <div className="w-full">
          <MainHome />
        </div>
      </div>
    </div>
  );
}
