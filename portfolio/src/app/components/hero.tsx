import { Dock, DockIcon } from "@/components/ui/dock";
import WordPullUp from "@/components/ui/word-pull-up";
import { Icons } from "@/lib/icon-props";
import Image from "next/image";
import myImage from "@/assets/PFP.jpg";

export const Hero = () => {
  return (
    <div className="relative h-full overflow-hidden bg-background rounded-lg border-2 border-gray-800 py-4 w-10/12 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="px-4 sm:px-8 w-full flex flex-col-reverse lg:flex-row justify-between items-center md:pt-8">
        {/* Left Section (Text and Icons) */}
        <div className="flex flex-col font-geistKanit items-center lg:items-start justify-center p-4 gap-y-8 w-full lg:w-7/12">
          <div className="flex items-center justify-center lg:justify-start w-full">
            <WordPullUp
              className="font-black text-center lg:text-left text-white dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              words="Hey, I  am  Divu"
            />
          </div>
          {/* Profile Picture (Hidden on larger screens) */}
          <Image
            src={myImage}
            height={180}
            width={180}
            className="rounded-lg lg:hidden"
            alt="Profile Picture"
          />
          {/* Dock Icons */}
          <div className="relative">
            <Dock direction="middle" className="mt-0">
              <DockIcon>
                <a
                  href="https://github.com/Diivvuu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.gitHub className="size-4 lg:size-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://www.linkedin.com/in/divyanshu-867452218/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedIn className="size-4 lg:size-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="mailto:divyanshubawa9@gmail.com"
                  className="flex items-center"
                >
                  <Icons.email className="size-4 lg:size-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://drive.google.com/file/d/1Y3Lm0JaYuFNWfNWtt0AwGVsEdWDvkBOc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.resume className="size-4 lg:size-6" />
                </a>
              </DockIcon>
            </Dock>
          </div>
          {/* Description */}
          <div className="w-full flex items-center justify-center overflow-hidden">
            <p className="text-center lg:text-left text-sm sm:text-base lg:text-lg font-geistKanit">
              I&apos;m a 21-year-old software developer from&nbsp; 🇮🇳&nbsp; who
              loves building full-stack applications, lifting weights, and
              living for caffeine.
            </p>
          </div>
        </div>

        {/* Right Section (Profile Picture) */}
        <div className="relative flex w-4/12 h-full p-2 flex-col items-center justify-center overflow-hidden bg-background rounded-lg">
          <Image
            src={myImage}
            // height={100}
            // width={100}
            layout="responsive"
            className="hidden lg:flex rounded-lg"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
};
