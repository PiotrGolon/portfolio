// "use client";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recent-project";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />

        <Grid />
        <RecentProjects />
        {/* <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
