"use client"; // Home.tsx
import { Hero } from "./components/hero";
import { MainSection } from "./components/main-section";
import { LeftSidebar } from "./components/left-sidebar";
import { WorkExp } from "./components/work-exp";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { TechStack } from "./components/tech-stack";
import { Contact } from "./components/contact";
import { RightSidebar } from "./components/right-sidebar";
import { GiHamburgerMenu } from "react-icons/gi"; // Importing a hamburger icon

const BoxReveal = dynamic(() => import("@/components/ui/box-reveal"), {
  ssr: false,
});

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const heroRef = useRef<HTMLDivElement>(null);
  const workExpRef = useRef<HTMLDivElement>(null);
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement >,
    offset: number = 0
  ) => {
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetInPixels = offset * window.innerHeight;
      const offsetPosition = elementPosition - offsetInPixels;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      if (sidebarOpen) setSidebarOpen(false);
    }
  };

  // Effect to handle sidebar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      <button
        className="fixed top-4 left-4 z-50 md:hidden" // Visible only on mobile
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <GiHamburgerMenu className="text-white text-2xl m-2" />
      </button>

      {/* Fixed left sidebar */}
      <div
        className={`md:w-3/12 w-full bg-black/90 fixed top-0 left-0 h-screen transition-transform transform ${
          sidebarOpen ? "z-40 pr-20" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <LeftSidebar
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          workExpRef={workExpRef}
          mainSectionRef={mainSectionRef}
          techStackRef={techStackRef}
          aboutSectionRef={aboutSectionRef}
        />
      </div>

      {/* Main content area */}
      <div className="md:w-6/12 mx-auto items-center justify-center overflow-hidden">
        <div className="relative my-4 rounded-xl mx-auto bg-black flex flex-col text-white min-h-screen">
          <BoxReveal boxColor={"#000"} width="100%" duration={1.2}>
            <>
              <div ref={heroRef} className="flex flex-col z-10">
                <div className="z-10 mt-6 font-getistKanit">
                  <Hero />
                </div>
              </div>
              <div ref={workExpRef}>
                <WorkExp />
              </div>
              <div ref={techStackRef}>
                <TechStack />
              </div>
              <div ref={mainSectionRef}>
                <MainSection />
              </div>
              <div ref={aboutSectionRef}>
                <Contact />
              </div>
            </>
          </BoxReveal>
        </div>
      </div>

      {/* Fixed right sidebar */}
      <div className="md:w-3/12 w-0 fixed top-0 right-0">
        <RightSidebar />
      </div>
    </div>
  );
}
