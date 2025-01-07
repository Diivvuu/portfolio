import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./card";
import { projects } from "@/lib/projects";
import { Education } from "./education";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-center w-10/12 mx-auto z-40 mt-12 font-geistKanit">
      <Tabs
        defaultValue="projects"
        className="w-full flex flex-col items-center justify-center border-gray-800 border-2 py-2 bg-[#000000ad] rounded-xl"
      >
        <TabsList className="w-full flex-row md:justify-between gap-x-3 bg-black">
          <TabsTrigger className="flex-1" value="projects">
            Projects
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="education">
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="projects"
          className="w-full mt-3 px-4 grid grid-cols-1 sm:grid-cols-2 gap-0 justify-items-center"
        >
          {Object.values(projects).map((project, index) => (
            <div key={index} className="flex justify-center w-full mt-2">
              <ProjectCard Project={project} />
            </div>
          ))}
        </TabsContent>
        <TabsContent
          className="w-full mt-3 overflow-y-scroll flex flex-col justify-center items-center"
          value="education"
        >
          <Education />
        </TabsContent>
      </Tabs>
    </div>
  );
};
