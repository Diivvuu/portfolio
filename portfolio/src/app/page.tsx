"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { BackgroundTechStack } from "./components/bg-tech-stack";
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";
import { LeftSidebar } from "./components/left-sidebar";
import BoxReveal from "@/components/ui/box-reveal";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-5/12">
        <LeftSidebar />
      </div>
      <div className="size-full items-center md:mx-20 justify-center overflow-hidden">
        <div className="relative my-4 rounded-xl mx-auto bg-[#0a090a] flex flex-col text-white min-h-screen border-2 border-white">
          <div className="min-h-screen border-2 border-white m-1 rounded-lg ">
            <BoxReveal boxColor={"#000"} width="100%" duration={1.2}>
              <div className="flex flex-col z-10">
                <div className="z-10 mt-6">
                  <Hero />
                </div>
                <div className="my-20 z-30">
                  <MainSection />
                </div>
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
      <div className="w-5/12">{/* <LeftSidebar /> */}</div>
      {/* <FlickeringGrid
        className="z-0 bg-black"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      /> */}
    </div>
  );
}
