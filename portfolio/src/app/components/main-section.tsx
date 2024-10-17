import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MainSection = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Tabs
        defaultValue="account"
        className="w-8/12 flex flex-col items-center justify-center bg-black rounded-xl"
      >
        <TabsList className="w-full bg-black">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="education">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
