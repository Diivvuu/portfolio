import { Button } from "@/components/ui/button";
import logo from "@/assets/site-logo.svg";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
export const WorkExp = () => {
  return (
    <div className="relative w-10/12 mx-auto px-20 border-2 border-gray-950 rounded-lg mt-12 font-geistKanit">
      <ol className="w-full relative border-s  dark:border-gray-700">
        <li className="my-3 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
            June 2024 - <span className="text-xs">Present</span>
          </time>
          <div className="w-full flex justify-between items-center gap-x-1 text-lg font-semibold text-white">
            <div>
              Software Developer <span className="text-sm">(Deep Thought)</span>
            </div>
            <Image
              src={logo}
              height={20}
              alt="dt logo"
              className=" rounded-full"
            />
          </div>
          <ul className="w-full list-disc mb-4 ml-8 text-base font-normal text-gray-400 dark:text-gray-400">
            <li>
              Developed a whole frontend of Marketpalce platform for a client
            </li>
            <li>
              Integrated APIs using Redux saga in artist and supervisor portal
              to make API calls more than 30% faster
            </li>
          </ul>
          <Button className="bg-white ml-4" variant="link">
            View more
          </Button>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-200 dark:text-gray-500">
            Nov 2023
          </time>
          <h3 className="text-lg font-semibold text-white">Freelancer</h3>
          <ul className="w-full list-disc mb-4 ml-8 text-base font-normal text-gray-400 dark:text-gray-400">
            <li>
              Got clients for for full stack projects through linkedin and
              community groups
            </li>
            <li>
              Made different tools using tech stack like Nextjs, Reactjs &
              Firebase and designed the whole frontend too!
            </li>
          </ul>
          <Button className="bg-white ml-4" variant="link">
            View more
          </Button>
        </li>
      </ol>
      <BorderBeam size={1000} duration={12} delay={9} />
    </div>
  );
};
