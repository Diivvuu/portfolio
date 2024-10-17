import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "redis",
  "typescript",

  "gitlab",
  "visualstudiocode",
  "figma",
  "nextdotjs",
  "nodedotjs",
  "reactquery",
  "redux",
  "npm",
  "mui",
  "mysql",
];
export const TechStack = () => {
  return (
    <div className="relative flex size-80 items-center justify-center overflow-hidden rounded-lg bg-background pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};
