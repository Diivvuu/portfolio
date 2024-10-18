"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { BackgroundTechStack } from "./components/bg-tech-stack";
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";
import { LeftSidebar } from "./components/left-sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-2/12">
        <LeftSidebar />
      </div>
      <div className="relative w-6/12 mx-auto bg-[#0a090a] flex flex-col pt-8 text-white min-h-screen p-0 border-2 border-white">
        {/* Background Grid */}
        <FlickeringGrid
          className="z-0 bg-gradient-to-b h-full w-full to-[#2b2a2a1d] from-[#ffffff28] absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />

        {/* Main Layout with Sidebar */}
        <div className="flex z-10">
          {/* Left Sidebar */}

          {/* Main Content Area */}
          <div className="flex-grow">
            {/* Hero Section */}
            <div className="z-10">
              <Hero />
            </div>

            {/* Main Section */}
            <div className="my-12 z-30">
              <MainSection />
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/12">{/* <LeftSidebar /> */}</div>
    </div>
  );
}
