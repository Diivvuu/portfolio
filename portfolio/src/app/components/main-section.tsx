import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./card";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-center w-10/12 mx-auto z-40">
      <Tabs
        defaultValue="projects"
        className="w-full flex flex-col items-center justify-center border-white border-2 shadow-md shadow-white py-2 bg-[#000000ad] rounded-xl"
      >
        <TabsList className="w-full bg-black ">
          <TabsTrigger className="w-full font-getistKanit" value="projects">
            Projects
          </TabsTrigger>
          <TabsTrigger className="w-full font-getistKanit" value="education">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="projects"
          className="w-full mt-3 overflow-y-scroll flex flex-col justify-center items-center"
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </TabsContent>
        <TabsContent value="education">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
