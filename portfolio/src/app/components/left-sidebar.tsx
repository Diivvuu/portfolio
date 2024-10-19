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
import { useGithubActivity } from "@/hooks/use-get-events";
import { Icons } from "@/lib/icon-props";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";

interface LeftSidebarProps {
  scrollToSection: (
    ref: React.RefObject<HTMLDivElement>, // Change HTMLElement to HTMLDivElement
    offset?: number
  ) => void;
  heroRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
  workExpRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
  mainSectionRef: React.RefObject<HTMLDivElement>; // Change HTMLElement to HTMLDivElement
}

export const LeftSidebar = ({
  scrollToSection,
  heroRef,
  workExpRef,
  mainSectionRef,
}: LeftSidebarProps) => {
  /* eslint-disable-next-line no-unused-vars */
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
    <div className="flex flex-col w-full h-full gap-y-8 pt-24 text-white justify-start items-end">
      <button onClick={() => scrollToSection(heroRef, 0.3)}>Hello</button>
      <button onClick={() => scrollToSection(workExpRef, 0.3)}>
        Experience
      </button>
      <button onClick={() => scrollToSection(mainSectionRef, 0.1)}>
        Projects
      </button>
      <div>Tech</div>

      <div>About</div>
      <div>Contact</div>
      <Popover>
        <PopoverTrigger asChild>
          <button className="justify-between">
            <Icons.gitHub className="size-8" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Recent Activity..." />
            <CommandList>
              <CommandGroup>
                {activities.activity.length > 0 ? (
                  activities.activity.map((activity) => (
                    <CommandItem
                      key={activity.id}
                      value={activity.payload?.commits?.[0]?.message} // Access the first commit message safely
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === activity.payload?.commits?.[0]?.message
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {activity.payload?.commits?.[0]?.message || "No message"}{" "}
                    </CommandItem>
                  ))
                ) : (
                  <CommandEmpty>No recent activity found.</CommandEmpty>
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
