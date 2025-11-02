import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Waitlist from "@/components/Waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     {/* <Waitlist /> */}
     <NavBar />
     <Hero />
    </div>
  );
}
