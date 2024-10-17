import Image from "next/image";
import { Dock, DockIcon } from "../ui/dock";
import { Icons } from "../ui/IconProps";
import React from "react";
import divu from "@/assets/PFP.jpg";
import amwn from "@/assets/amwn.jpg";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "mongodb",
  "aws",
  "netlify",
  "tailwindcss",
  "magicui",
  "shadcn",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "firebase",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "redis",
];

const Header: React.FC = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-80 text-white">
        <div className="relative">
          <div className="flex justify-center">
            <Image
              className="rounded-3xl"
              height={200}
              width={200}
              src={divu}
              alt="pfp"
            />
          </div>
          <Dock direction="middle" className="bg-neutral-600">
            <DockIcon>
              <Icons.gitHub className="size-6" />
            </DockIcon>
            <DockIcon>
              <Icons.linkedIn className="size-6" />
            </DockIcon>
            <DockIcon>
              <Icons.email className="size-6" />
            </DockIcon>
            <DockIcon>
              <Icons.instagram className="size-6" />
            </DockIcon>
          </Dock>
        </div>
        <div className="flex justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <Image
              className="rounded-3xl"
              height={200}
              width={200}
              src={amwn}
              alt="PFP"
            />
          </div>
          <Dock direction="middle" className="bg-stone-800">
            <DockIcon>
              <Icons.gitHub className="size-6" />
            </DockIcon>
            <DockIcon>
              hi{/* <Icons.googleDrive className="size-6" /> */}
            </DockIcon>
            <DockIcon>hi{/* <Icons.notion className="size-6" /> */}</DockIcon>
            <DockIcon>hi{/* <Icons.whatsapp className="size-6" /> */}</DockIcon>
          </Dock>
        </div>
      </div>
    </div>
  );
};

export default Header;
