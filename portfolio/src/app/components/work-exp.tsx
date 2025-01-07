import PBLogo from "@/assets/peerbrains logo.png";
import DTlogo from "@/assets/site-logo.svg";
import CNLogo from "@/assets/coding ninjas logo.jpg";
import Image from "next/image";
import { Code } from "lucide-react";

export const WorkExp = () => {
  return (
    <div className="relative w-10/12 mx-auto px-20  border-2 border-gray-800 rounded-lg mt-12 font-poppins">
      <ol className="w-full relative border-s dark:border-gray-700">
        <li className="my-3 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
            Jan&lsquo;25
          </time>
          <div className="w-full flex justify-between items-center gap-x-1 text-sm md:text-lg font-semibold text-white">
            <div className="flex flex-col justify-start text-sm">
              <div>PeerBrains</div>
              <div className="text-xs">Software Developer</div>
            </div>
            <div className="w-5/12 md:w-3/12 lg:w-2/12 sm:w-4/12">
              <Image
                src={PBLogo}
                // layout="responsive"
                width={60}
                height={60}
                alt="pb logo"
                className="bg-gray-200 p-1 rounded-xl my-2"
              />
            </div>
          </div>
          <ul className="w-10/12 list-disc mb-4 ml-8 text-xs md:text-base font-normal text-gray-400 dark:text-gray-400"></ul>
        </li>
        <li className="mb-4 mt-3 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
            Jun&lsquo;24 - Dec&lsquo;24
          </time>
          <div className="w-full mt-4 flex justify-between items-center gap-x-1 text-sm md:text-lg font-semibold text-white">
            <div className="flex flex-col justify-start text-sm">
              <div>Deep Thought</div>
              <div className="text-xs">Software Developer Intern</div>
            </div>
            <div className="w-5/12 md:w-4/12 lg:w-3/12 sm:w-4/12">
              <Image
                src={DTlogo}
                layout="responsive"
                width={100}
                height={40}
                alt="dt logo"
                className="bg-gray-200 p-1 rounded-full my-2"
              />
            </div>
          </div>
          <ul className="w-10/12 list-disc mb-4 ml-8 text-xs md:text-base font-normal text-gray-400 dark:text-gray-400"></ul>
        </li>
        <li className="my-1 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
            Nov 2023
          </time>
          <div className="w-full flex justify-between items-center gap-x-1 text-sm md:text-lg font-semibold text-white">
            <div className="text-sm">Freelancer</div>
            <Code className="size-10 text-black bg-gray-200 p-1 rounded-full my-2" />
          </div>
          <ul className="w-10/12 list-disc mb-4 ml-8 text-xs md:text-base font-normal text-gray-400 dark:text-gray-400"></ul>
        </li>
        <li className="mb-3 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
            Nov 2023
          </time>
          <div className="w-full flex justify-between items-center gap-x-1 text-sm md:text-lg font-semibold text-white">
            <div className="flex flex-col justify-start text-sm">
              <div>Coding Ninjas</div>
              <div className="text-xs">Teaching Assistant</div>
            </div>
            <div className="w-5/12 md:w-3/12 lg:w-3/12 sm:w-4/12 flex justify-end">
              <Image
                src={CNLogo}
                // layout="responsive"
                width={60}
                // height={40}
                alt="dt logo"
                className="bg-gray-200 rounded-xl p-0.5 my-2"
              />
            </div>
          </div>
          <ul className="w-10/12 list-disc mb-4 ml-8 text-xs md:text-base font-normal text-gray-400 dark:text-gray-400"></ul>
        </li>
      </ol>
    </div>
  );
};
