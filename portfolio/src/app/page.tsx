"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { BackgroundTechStack } from "./components/bg-tech-stack";
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";

export default function Home() {
  return (
    <>
      <div className="relative max-w-3xl w-full mx-auto bg-[#0a090a] flex flex-col pt-8 text-white min-h-screen p-0 border-2 border-white">
        <FlickeringGrid
          className="z-0 bg-gradient-to-b h-full w-full to-[#2b2a2a1d] from-[#ffffff28] absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          // height={100%}
          // width={800}
        />
        <div className="z-10">
          <Hero />
        </div>
        <div className="my-12 z-10">
          <MainSection />
        </div>
      </div>
    </>
  );
}
