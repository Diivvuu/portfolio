import { useGithubActivity } from "@/hooks/use-get-events";
import { Icons } from "@/lib/icon-props";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name?: string | undefined;
  description?: string;
  link?: string;
  color?: string;
  time?: string;
}

const Notification = ({ name, description, link, color, time }: Item) => {
  const repoLink = link?.replace("api.github.com/repos", "github.com");
  console.log(repoLink);
  return (
    <figure
      className={cn(
        "relative mx-auto w-full cursor-pointer overflow-hidden rounded-2xl px-3 py-1",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-black text-white border-2 border-slate-400 rounded-3xl  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row justify-start gap-2 items-center font-geistKanit">
          <span className="">
            <Icons.gitHub className="text-white size-4" />
          </span>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre font-medium dark:text-white ">
              <span className="text-xs text-nowrap max-h-12">
                {description}
              </span>
              <span className="mx-1">·</span>
              <span className="text-sm text-gray-500">{name}</span>
            </figcaption>
            {/* <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p> */}
          </div>
        </div>
      </a>
    </figure>
  );
};

export const RightSidebar = () => {
  const [_open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const activities = useGithubActivity();

  // Ensure activities are defined before accessing
  if (activities.loading) {
    return <div>Loading...</div>;
  }

  if (activities.error) {
    console.error(activities.error);
    return <div>Error loading activities</div>;
  }

  return (
    <div className="w-9/12 mt-20 border-2 font-geistKanit border-gray-800 rounded-xl px-4 py-1">
      <div className="py-2 text-white text-sm flex items-center gap-x-2 justify-start">
        <Icons.gitHub className="size-6 text-white" />
        Recent Activity
      </div>
      <AnimatedList className="pt-2">
        {activities.activity.length > 0 ? (
          activities.activity.slice(0, 5).map((activity) => (
            // <div key={activity.id} className="text-white">
            <Notification
              name={activity.payload?.commits?.[0]?.message}
              description={activity?.repo?.name}
              link={activity?.repo?.url}
            />

            // </div>
          ))
        ) : (
          <div>No recent activity found.</div>
        )}
      </AnimatedList>
    </div>
  );
};
