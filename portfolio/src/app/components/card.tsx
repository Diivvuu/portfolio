import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icons } from "@/lib/icon-props";
import Image from "next/image";
import projectImg from "@/assets/Screenshot 2024-10-19 234852.png";
import projectImg1 from "@/assets/Screenshot 2024-10-19 233638.png";
import projectImg2 from "@/assets/Screenshot 2024-10-19 234026.png";
import projectImg3 from "@/assets/Screenshot 2024-10-19 234155.png";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { BorderBeam } from "@/components/ui/border-beam";

export const ProjectCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = [projectImg, projectImg1, projectImg2, projectImg3];
  return (
    <div className="relative m-4 py-4 flex h-full w-11/12 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex gap-12 justify-between px-16 items-center text-white">
          <div className="text-white text-lg font-getistKanit font-semibold">
            {/* <AnimatedShinyText className="inline-flex items-center justify-center px-3 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"> */}
            {/* <ShimmerButton className="relative py-1 px-3 text-[#000000c8] bg-white font-getistKanit font-semibold text-sm"> */}
            Sync Music Lab
            {/* </ShimmerButton> */}
            {/* </AnimatedShinyText> */}
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <div>
              <Icons.gitHub className="size-5 text-white" />
            </div>
            <div>
              <Icons.url className="size-5 text-white" />{" "}
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center mt-3">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-h-fit"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    {/* <AspectRatio className="border-none" ratio={6 / 4}> */}
                    <div className="relative flex h-full w-10/12 mx-auto p-2 flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                      <Image
                        className="bg-[#253fe7e8] rounded-lg opacity-80 hover:opacity-100 transition-all ease-in duration-300"
                        alt="project"
                        height={250}
                        width={250}
                        layout="responsive"
                        objectFit="cover"
                        src={image}
                      />
                      <BorderBeam
                        colorFrom="#5573fa"
                        colorTo="#fa7364"
                        size={650}
                        duration={12}
                        delay={9}
                      />
                    </div>
                    {/* </AspectRatio> */}
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
        <div className="w-full flex items-center justify-center gap-x-3 flex-nowrap gap-y-2 mt-4 px-16">
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:scale-90 transition-all ease duration-300">
            React.js
          </div>
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:text-black hover:bg-white hover:scale-90 transition-all ease duration-300">
            Node.js
          </div>
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:text-black hover:bg-[#f2f2f2] hover: hover:scale-90 transition-all ease duration-300">
            Redux
          </div>
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:text-black hover:bg-[#f2f2f2] hover: hover:scale-90 transition-all ease duration-300">
            Stripe
          </div>
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:text-black hover:bg-[#f2f2f2] hover: hover:scale-90 transition-all ease duration-300">
            MongoDB
          </div>
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:text-black hover:bg-[#f2f2f2] hover: hover:scale-90 transition-all ease duration-300">
            Express
          </div>
          <div className="text-xs px-2 py-1 rounded-lg border-2 border-white hover:text-black hover:bg-[#f2f2f2] hover: hover:scale-90 transition-all ease duration-300">
            Parallax
          </div>
        </div>
      </div>
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span> */}
    </div>
  );
};
