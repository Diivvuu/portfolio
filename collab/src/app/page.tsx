"use client";
import Header from "@/components/self/Header";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <>
      {/* Flickering grid as a background */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full z-10 bg-neutral-300"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>

      {/* Main content over the grid */}
      <div className="relative z-10 min-h-screen rounded-lg w-full bg-background overflow-hidden border">
        <Header />
      </div>
    </>
  );
}
