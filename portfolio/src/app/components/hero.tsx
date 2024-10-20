import { Dock, DockIcon } from "@/components/ui/dock";
import WordPullUp from "@/components/ui/word-pull-up";
import { Icons } from "@/lib/icon-props";
import Image from "next/image";
import myImage from "@/assets/PFP.jpg";

export const Hero = () => {
  return (
    <div className="relative h-full overflow-hidden bg-background rounded-lg border-2 border-gray-800 py-4 w-10/12 flex flex-col items-center justify-center mx-auto">
      <div className="px-8 w-full flex justify-between items-center pt-8">
        <div className="flex flex-col items-start justify-center md:justify-start p-4 gap-y-8 w-full lg:w-7/12">
          <div className="flex items-center justify-center md:justify-start w-full ">
            <WordPullUp
              className="font-black text-center md:text-left text-nowrap font-geistKanit text-white dark:text-white text-base md:text-2xl lg:text-5xl"
              words="Hey, I  am  Divu"
            />
          </div>
          <Image
            src={myImage}
            height={180}
            width={180}
            className="rounded-lg md:hidden"
            alt="pfp"
          />
          <div className="relative">
            <Dock direction="middle" className="mt-0">
              <DockIcon>
                <Icons.gitHub className="size-4 lg:size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.linkedIn className="size-4 lg:size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.email className="size-4 lg:size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.resume className="size-4 lg:size-6" />
              </DockIcon>
            </Dock>
          </div>
          <div className="w-full items-center justify-center overflow-hidden">
            <p className="lg:text-lg text-center md:text-left md:text-xs font-geistKanit">
              I&apos;m a 21 year old software developer from&nbsp; 🇮🇳&nbsp; and
              I love building full stack applications, lifting weights and I
              live for caffiene .
            </p>
          </div>
        </div>
        <div className="relative flex h-full w-fit-content p-2 flex-col items-center justify-center overflow-hidden bg-background rounded-lg">
          <Image
            src={myImage}
            height={180}
            width={180}
            layout="responsive"
            className="hidden md:flex rounded-lg"
            alt="pfp"
          />
        </div>
      </div>
      {/* <BorderBeam size={1000} duration={12} delay={9} /> */}
    </div>
  );
};
