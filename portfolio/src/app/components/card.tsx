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
import { Card, CardContent } from "@/components/ui/card";

export const ProjectCard = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = [projectImg, projectImg1, projectImg2, projectImg3];
  return (
    <div className="relative m-4 py-4 flex h-full w-11/12 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex gap-12 justify-between px-16 items-center text-white">
          <div className="text-white text-lg font-geistKanit font-semibold">
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
        <div className="w-full h-auto flex justify-center items-center mt-3">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="">
              {images.map((image, index) => (
                <CarouselItem key={index} className="">
                  <Card className="bg-transparent border-none">
                    <CardContent className="p-0 w-10/12 mx-auto">
                      <Image
                        className="relative w-10/12 h-full mx-auto bg-[#253fe7e8] rounded-lg opacity-80 hover:opacity-100 transition-all ease-in duration-300"
                        alt="project"
                        // height={250}
                        // width={200}
                        layout="responsive"
                        // objectFit="cover"
                        src={image}
                      />
                      <BorderBeam
                        colorFrom="#fa7364"
                        colorTo="#5573fa"
                        size={1000}
                        duration={12}
                        delay={9}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>

        <div className="w-full flex items-center justify-center gap-x-3 flex-nowrap gap-y-2 mt-4 px-16">
          <div className="text-xs px-2 py-1 rounded-md border-2 border-gray-950 hover:scale-90 hover:bg-white hover:text-black transition-all ease duration-300">
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
