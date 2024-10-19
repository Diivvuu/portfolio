"use client";
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";
import { LeftSidebar } from "./components/left-sidebar";
import BoxReveal from "@/components/ui/box-reveal";
import { WorkExp } from "./components/work-exp";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Fixed left sidebar */}
      <div className="w-3/12 fixed top-0 left-0 h-screen">
        <LeftSidebar />
      </div>

      {/* Main content area */}
      <div className="w-6/12 mx-auto items-center justify-center overflow-hidden">
        <div className="relative my-4 rounded-xl mx-auto bg-black flex flex-col text-white min-h-screen">
          <BoxReveal boxColor={"#000"} width="100%" duration={1.2}>
            <div className="flex flex-col z-10">
              <div className="z-10 mt-6 font-getistKanit">
                <Hero />
              </div>
              <div className="">
                <WorkExp />
              </div>
              <div className="mt-20 z-30">
                <MainSection />
              </div>
            </div>
          </BoxReveal>
        </div>
      </div>

      {/* Fixed right sidebar */}
      <div className="w-3/12 fixed top-0 right-0 h-screen">
        {/* <LeftSidebar /> */}
      </div>
    </div>
  );
}
