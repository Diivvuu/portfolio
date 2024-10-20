import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./card";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-center w-10/12 mx-auto z-40 mt-12 font-geistKanit">
      <Tabs
        defaultValue="projects"
        className="w-full flex flex-col items-center justify-center border-white border-2 shadow-md shadow-white py-2 bg-[#000000ad] rounded-xl"
      >
        <TabsList className="w-11/12 flex justify-between gap-x-3 bg-black ">
          <TabsTrigger className="w-full" value="projects">
            Projects
          </TabsTrigger>
          <TabsTrigger className="w-full" value="education">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="projects"
          className="w-full mt-3 px-4 overflow-y-scroll flex flex-col justify-center items-center"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </TabsContent>
        <TabsContent
          className="w-full mt-3 overflow-y-scroll flex flex-col justify-center items-center"
          value="education"
        >
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};
