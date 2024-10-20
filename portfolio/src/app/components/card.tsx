import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icons } from "@/lib/icon-props";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

interface project {
  name: string;
  repo_link: string;
  project_link: string;
  images: StaticImageData[];
  techStack: string[];
}
interface ProjectCardProps {
  Project: project;
}

export const ProjectCard = ({ Project }: ProjectCardProps) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  // const images = [projectImg, projectImg1, projectImg2, projectImg3];
  return (
    <div className="relative m-2 py-4 flex h-full max-h-full w-11/12 hover:scale-105 transition-all ease  duration-300 flex-col items-center justify-start overflow-hidden rounded-lg border-2 border-gray-600 bg-background md:shadow-xl">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex gap-12 justify-between px-2 items-center text-white">
          <div className="text-white text-sm font-geistKanit font-semibold">
            {Project.name}
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <div>
              <a
                href={Project.repo_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.gitHub className="size-4 text-white" />
              </a>
            </div>
            <div>
              <a
                href={Project.project_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.url className="size-4 text-white" />{" "}
              </a>
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
              {Project.images.map((image, index) => (
                <CarouselItem key={index} className="">
                  <Card className="bg-transparent border-none">
                    <CardContent className="p-1 h-full  w-full mx-auto">
                      <Image
                        className="relative  w-10/12 mx-auto rounded-lg opacity-80 hover:opacity-100 transition-all ease-in duration-300"
                        alt="project"
                        // height={250}
                        // width={200}
                        layout="responsive"
                        objectFit="cover"
                        src={image}
                      />
                      {/* <BorderBeam
                        colorFrom="#fa7364"
                        colorTo="#5573fa"
                        size={1000}
                        duration={12}
                        delay={9}
                      /> */}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="text-black bg-transparent hover:bg-transparent border-none" />
            <CarouselNext className="text-black bg-transparent hover:bg-transparent border-none" />
          </Carousel>
        </div>

        <div className="w-full flex items-center justify-start gap-x-1 flex-wrap gap-y-1 mt-4 px-2">
          {Project.techStack.map((tech, index) => (
            <div
              key={index}
              className="text-xs px-1 py-1 rounded-md border-2 border-gray-800 bg-[#100f10] hover:scale-90 hover:bg-white hover:text-black transition-all ease duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Shine Border
      </span> */}
    </div>
  );
};
