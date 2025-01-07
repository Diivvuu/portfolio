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
import { AlertTriangleIcon } from "lucide-react";

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

  return (
    <div className="relative m-2 py-4 flex h-full max-h-full w-full md:w-full  flex-col items-center justify-start overflow-hidden rounded-lg border-2 border-gray-600 bg-background shadow-lg md:shadow-xl">
      <div className="w-full h-full flex flex-col justify-center items-center px-4">
        {/* Project Name and Links */}
        <div className="w-full flex flex-col flex-shrink md:flex-row gap-4 md:gap-12 justify-between items-center text-white">
          <div className="text-white text-nowrap text-base font-geistKanit font-semibold">
            {Project.name}
          </div>
          <div className="flex justify-center items-center gap-x-3">
            <a
              href={Project.repo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Icons.gitHub className="size-5 md:size-6 text-white" />
            </a>
            <a
              href={Project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Icons.url className="size-5 md:size-6 text-white" />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full h-full flex justify-center items-center mt-4 md:mt-6">
          {Project.images.length > 0 ? (
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
                      <CardContent className="p-2 md:p-4 h-full w-full mx-auto">
                        <Image
                          className="relative w-full rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                          alt="project"
                          layout="responsive"
                          objectFit="cover"
                          src={image}
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="text-black bg-transparent hover:bg-transparent border-none" />
              <CarouselNext className="text-black bg-transparent hover:bg-transparent border-none" />
            </Carousel>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <AlertTriangleIcon className="size-10" />
              <div className="w-full text-center">
                Visuals Restricted for Confidentiality
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="w-full flex items-center justify-center gap-2 md:gap-1 flex-wrap mt-4 px-2">
          {Project.techStack.map((tech, index) => (
            <div
              key={index}
              className="text-xs md:text-sm px-2 py-1.5 rounded-lg border-2 border-gray-700 bg-black  shadow-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
