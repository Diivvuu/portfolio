import React, { useEffect, useMemo, useState } from "react";
import {
  fetchSimpleIcons,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import { useTheme } from "next-themes";

// Function to render custom icons
const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 80,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export const TechStack = () => {
  const iconSlugs = useMemo(
    () => [
      { slug: "redis", label: "Redis" },
      { slug: "nextdotjs", label: "Next.js" },
      { slug: "react", label: "React" },
      { slug: "nodedotjs", label: "Node.js" },
      { slug: "git", label: "Git" },
      { slug: "figma", label: "Figma" },
      { slug: "tailwindcss", label: "Tailwind CSS" },
      { slug: "shadcnui", label: "Shadcn UI" },
      { slug: "mongodb", label: "MongoDB" },
      { slug: "appwrite", label: "Appwrite" },
      { slug: "express", label: "Express" },
      { slug: "bootstrap", label: "Bootstrap" },
      { slug: "html5", label: "HTML5" },
      { slug: "css3", label: "CSS3" },
      { slug: "javascript", label: "JavaScript" },
      { slug: "typescript", label: "TypeScript" },
      { slug: "stripe", label: "Stripe" },
      { slug: "netlify", label: "Netlify" },
      { slug: "mui", label: "MUI" },
      { slug: "vercel", label: "Vercel" },
      { slug: "github", label: "GitHub" },
    ],
    []
  );

  const [data, setData] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const slugs = iconSlugs.map((icon) => icon.slug); // Extract slugs for fetching
    fetchSimpleIcons({ slugs }).then(setData);
  }, [iconSlugs]); // No dependencies since iconSlugs is now stable

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return iconSlugs.map(({ slug, label }) => {
      const icon = renderCustomIcon(data.simpleIcons[slug], theme.theme);
      return { icon, label }; // Return icon and corresponding label
    });
  }, [data, theme]);

  return (
    <div className="relative flex gap-2 flex-wrap font-geistKanit w-10/12 mx-auto items-center justify-center overflow-hidden rounded-lg bg-background pb-20 pt-8">
      {/* Render icons with labels */}
      <div className="flex w-full justify-start ">My Tech Toolbox</div>
      {renderedIcons?.map(({ icon, label }, index) => (
        <div className="flex items-center justify-between border-2 border-white py-1 px-2 rounded-lg group hover:scale-110 transition-all ease duration-300">
          <span
            key={`icon-${index}`}
            className="inline-flex size-4 flex-col items-center mx-2 group-hover:scale-75 transition-all ease duration-300"
          >
            {icon}
          </span>
          <span className="text-sm group-hover:scale-110 transition-all ease duration-300">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
