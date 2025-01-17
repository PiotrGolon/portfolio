// "use client";
// import Grid from "@/components/grid";
import Hero from "@/components/hero";
import { GridGlobe } from "@/components/ui/grid-globe";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <GridGlobe />
        {/* <Grid /> */}
        {/* <RecentProject />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
