import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./card";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Tabs
        defaultValue="projects"
        className="w-9/12 flex flex-col items-center justify-center px-4 py-2 bg-[#000000ad] rounded-xl"
      >
        <TabsList className="w-full bg-black ">
          <TabsTrigger className="w-full" value="projects">
            Projects
          </TabsTrigger>
          <TabsTrigger className="w-full" value="education">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="w-10/12 mt-3">
          <ProjectCard />
        </TabsContent>
        <TabsContent value="education">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
