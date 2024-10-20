import HyperText from "@/components/ui/hyper-text";
import { useState } from "react";

interface LeftSidebarProps {
  scrollToSection: (
    ref: React.RefObject<HTMLDivElement>, // Change HTMLElement to HTMLDivElement
    offset?: number
  ) => void;
  heroRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
  workExpRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
  mainSectionRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
  techStackRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
  aboutSectionRef: React.RefObject<HTMLDivElement>;
}

export const LeftSidebar = ({
  scrollToSection,
  heroRef,
  workExpRef,
  mainSectionRef,
  techStackRef,
  aboutSectionRef,
}: LeftSidebarProps) => {
  /* eslint-disable-next-line no-unused-vars */

  return (
    <div className="flex flex-col w-full h-full gap-y-8 pt-24 text-white justify-start items-end font-geistKanit">
      <button onClick={() => scrollToSection(heroRef, 0.3)}>
        <HyperText text="Hello"></HyperText>
      </button>
      <button onClick={() => scrollToSection(workExpRef, 0.1)}>
        <HyperText text="Experience"></HyperText>
      </button>
      <button onClick={() => scrollToSection(techStackRef, 0.2)}>
        <HyperText text="Tech"></HyperText>
      </button>
      <button onClick={() => scrollToSection(mainSectionRef, 0.1)}>
        <HyperText text="Projects"></HyperText>
      </button>
      <button onClick={() => scrollToSection(aboutSectionRef, 0.2)}>
        <HyperText text="Contact"></HyperText>
      </button>
    </div>
  );
};
