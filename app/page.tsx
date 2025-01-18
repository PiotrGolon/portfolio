// "use client";
import Clients from "@/components/clients";
import Experience from "@/components/experience";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-project";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Approach from "../components/approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />

        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        {/*  <Footer /> */}
      </div>
    </main>
  );
}
