import Image from "next/image";
import { Dock, DockIcon } from "../ui/dock";
import { Icons } from "../ui/IconProps";
import React from "react";
interface IconProps {
  googleDrive: string | React.HTMLAttributes<SVGElement>;
  notion: string;
  whatsapp: string;
  gitHub: string;
}

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center px-80 text-white">
      <div className="relative">
        <Dock direction="middle">
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
      <div className="relative">
        <Dock direction="middle">
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
  );
};

export default Header;
