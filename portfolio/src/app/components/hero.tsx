import { Dock, DockIcon } from "@/components/ui/dock";
import WordPullUp from "@/components/ui/word-pull-up";
import { Icons } from "@/lib/icon-props";
import { IN } from "country-flag-icons/react/3x2";
import Image from "next/image";
import myImage from "@/assets/PFP.jpg";
import IconCloud from "@/components/ui/icon-cloud";
import { TechStack } from "./tech-stack";
import { FadeText } from "@/components/ui/fade-text";
import BoxReveal from "@/components/ui/box-reveal";

export const Hero = () => {
  return (
    // <div className="">
    <div className="p-4 max-w-4xl w-full flex flex-col items-center justify-center mx-auto ">
      <div className="px-8 w-full flex justify-between items-end pt-8">
        <div className="flex flex-col items-start justify-end gap-y-8 w-8/12">
          <div className="flex items-center">
            <WordPullUp
              className="text-4xl font-black font-getistKanit text-white dark:text-white md:text-4xl"
              words="Hi, I  am  Divu"
            />
            {/* <div className="text-6xl">🇮🇳</div> */}
          </div>
          <div className="relative">
            <Dock direction="middle" className="mt-0">
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
                <Icons.resume className="size-6" />
              </DockIcon>
            </Dock>
          </div>
          <div className="w-full items-center justify-center overflow-hidden font-getistKanit">
            <BoxReveal boxColor={"#333"} duration={1}>
              <p className="text-lg">
                I'm a 21 year old software developer from &nbsp; 🇮🇳, <br />I
                love building full stack applications, lifting <br />
                weights and I run on caffiene .
              </p>
            </BoxReveal>
          </div>
        </div>
        <div>
          <Image
            src={myImage}
            height={280}
            width={250}
            className="rounded-lg shadow-lg shadow-[#f2f2f269]"
            alt="pfp"
          />
        </div>
      </div>
    </div>
  );
};
