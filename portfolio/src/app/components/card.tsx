import ShineBorder from "@/components/ui/shine-border";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icons } from "@/lib/icon-props";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import projectImg from "@/assets/Screenshot 2024-10-18 133508.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";

export const ProjectCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <ShineBorder
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex gap-12 justify-between items-center text-white">
          <div>
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="font-getistKanit text-base">
                  SYNC MUSIC LAB
                </span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <div>
              <Icons.gitHub className="size-4 text-white" />
            </div>
            <div>
              <Icons.url className="size-4 text-white" />{" "}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center mt-3">
          <Carousel
            plugins={[plugin.current]}
            className="w-10/12 md:max-h-56 lg:max-h-[16.5rem]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <AspectRatio ratio={4 / 4}>
                      <div className="relative  flex h-fullw-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                        <Image
                          className="rounded-lg  opacity-40 hover:opacity-75 transition-all ease-in duration-300"
                          alt="project"
                          src={projectImg}
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                      </div>
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className="opacity-30 hover:opacity-80 bg-transparent text-white bg-gradient-to-tl from-white to-black transition-all ease-in duration-300"
            />
            <CarouselNext
              variant="ghost"
              className="opacity-30 hover:opacity-80 bg-transparent text-white bg-gradient-to-br from-white to-black transition-all ease-in duration-300"
            />
          </Carousel>
        </div>
        <div className="">
          <div className="">
            <Button className="ml-6">Typescript</Button>
            <Button className="ml-6">Typescript</Button>
            <Button className="ml-6">Typescript</Button>
            <Button className="ml-6">Typescript</Button>
            <Button className="ml-6">Typescript</Button>
            <Button className="ml-6">Typescript</Button>
          </div>
        </div>
      </div>
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span> */}
    </ShineBorder>
  );
};
