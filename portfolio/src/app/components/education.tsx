import Image from "next/image";
import lpu from "@/assets/lpulogo.svg";
import mgn from "@/assets/mgnlogo.png";
import ihs from "@/assets/ihslogo.webp";
import { Link } from "lucide-react";

export const Education = () => {
  return (
    <div className="relative w-10/12 mx-auto px-2 rounded-lg my-6 font-poppins">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 24
          </time>

          <div className="flex justify-between items-center text-base">
            <div> B.Tech (CSE) Lovely Professional University</div>
            <Image
              src={lpu}
              height={20}
              className="bg-gray-200 p-1 rounded-full my-2"
              alt="school logo"
            />
          </div>
          <ul className="text-sm text-white font-normal list-disc ml-8">
            <li>Graduated with major in Machine learning</li>
            <li>Dean&lsquo;s List 2023</li>
            <li>
              <div className="flex items-center justify-center bg-gray-700 border-2 border-gray-700 p-1 hover:border-white hover:bg-black transition-all ease duration-300 cursor-pointer rounded-lg w-fit text-xs text-gray-200">
                <Link className="size-3 mr-2" />
                Final year project
              </div>
            </li>
          </ul>
        </li>
        <li className="mb-2 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2020
          </time>
          <div className="flex items-center justify-between text-base">
            <div>12th grade M.G.N. Public School, Jalandhar</div>
            <Image
              src={mgn}
              height={20}
              className="bg-gray-200 p-1 rounded-full my-2"
              alt="school logo"
            />
          </div>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2018
          </time>

          <div className="flex items-center justify-between text-base">
            <div>10th grade Innocent Hearts School, Jalandhar</div>
            <Image
              src={ihs}
              height={20}
              className="bg-gray-200 p-1 rounded-full my-2"
              alt="school logo"
            />
          </div>
        </li>
      </ol>
    </div>
  );
};
