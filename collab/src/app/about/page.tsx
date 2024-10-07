import { Button } from "@/components/ui/button";
import IconCloud from "@/components/ui/icon-cloud";
import React from "react";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const page = () => {
  return (
    <div className="flex justify-center items-center">
      <Button>Hi</Button>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default page;
