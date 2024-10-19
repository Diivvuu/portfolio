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
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  heroRef: React.RefObject<HTMLElement>;
  workExpRef: React.RefObject<HTMLElement>;
  mainSectionRef: React.RefObject<HTMLElement>;
}

export const LeftSidebar = ({
  scrollToSection,
  heroRef,
  workExpRef,
  mainSectionRef,
}: LeftSidebarProps) => {
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
      <button onClick={() => scrollToSection(heroRef)}>Hero Section</button>
      <button onClick={() => scrollToSection(workExpRef)}>
        Work Experience
      </button>
      <button onClick={() => scrollToSection(mainSectionRef)}>Projects</button>

      <div>Experience</div>
      <div>Tech</div>
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
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  );
};
