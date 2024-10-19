"use client";
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";
import { LeftSidebar } from "./components/left-sidebar";
import BoxReveal from "@/components/ui/box-reveal";
import { WorkExp } from "./components/work-exp";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-6/12">
        <LeftSidebar />
      </div>
      <div className="size-full items-center md:mx-20 justify-center overflow-hidden">
        <div className="relative my-4 rounded-xl mx-auto bg-[#0a090a] flex flex-col text-white min-h-screen border-2 border-white">
          <div className="min-h-screen border-2 border-white m-1 rounded-lg ">
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
      </div>
      <div className="w-6/12">{/* <LeftSidebar /> */}</div>
    </div>
  );
}
