import Clubfeed from "@/components/Clubfeed";
import ClubsList from "@/components/ClubsList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className="flex px-[80px] max-w-[1250px] mx-auto ">
        <Sidebar />
        <div className="flex-grow flex">
          <Clubfeed />
          <ClubsList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
