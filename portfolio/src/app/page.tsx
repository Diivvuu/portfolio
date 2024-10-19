"use client"; // Home.tsx
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";
import { LeftSidebar } from "./components/left-sidebar";
import { WorkExp } from "./components/work-exp";
import dynamic from "next/dynamic";
import { useRef } from "react";

const BoxReveal = dynamic(() => import("@/components/ui/box-reveal"), {
  ssr: false,
});

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const workExpRef = useRef<HTMLElement>(null);
  const mainSectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLElement>,
    offset: number = 0
  ) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetInPixels = offset * window.innerHeight; // Convert offset to pixels
      const offsetPosition = elementPosition - offsetInPixels; // Adjust position by the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Fixed left sidebar */}
      <div className="w-3/12 fixed top-0 left-0 h-screen">
        <LeftSidebar
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          workExpRef={workExpRef}
          mainSectionRef={mainSectionRef}
        />
      </div>

      {/* Main content area */}
      <div className="w-6/12 mx-auto items-center justify-center overflow-hidden">
        <div className="relative my-4 rounded-xl mx-auto bg-black flex flex-col text-white min-h-screen">
          <BoxReveal boxColor={"#000"} width="100%" duration={1.2}>
            <div ref={heroRef} className="flex flex-col z-10">
              <div className="z-10 mt-6 font-getistKanit">
                <Hero />
              </div>
            </div>
            <div ref={workExpRef}>
              <WorkExp />
            </div>
            <div ref={mainSectionRef} className="mt-20 z-30">
              <MainSection />
            </div>
          </BoxReveal>
        </div>
      </div>

      {/* Fixed right sidebar */}
      <div className="w-3/12 fixed top-0 right-0 h-screen"></div>
    </div>
  );
}
