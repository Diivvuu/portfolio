import React, { useEffect, useMemo, useState } from "react";
import {
  fetchSimpleIcons,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface IconData {
  simpleIcons: Record<string, SimpleIcon>;
}

// Function to render custom icons
const renderCustomIcon = (icon: SimpleIcon, theme: string | undefined) => {
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
      onClick: (e) => e.preventDefault(),
    },
  });
};

export const TechStack = () => {
  const iconSlugs = useMemo(
    () => [
      { slug: "nextdotjs", label: "Next.js" },
      { slug: "react", label: "React" },
      { slug: "nodedotjs", label: "Node.js" },
      { slug: "git", label: "Git" },
      { slug: "figma", label: "Figma" },
      { slug: "tailwindcss", label: "Tailwind CSS" },
      { slug: "shadcnui", label: "Shadcn UI" },
      { slug: "mongodb", label: "MongoDB" },
      { slug: "reactquery", label: "React Query" },
      { slug: "axios", label: "Axios" },
      { slug: "redis", label: "Redis" },
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

  const [data, setData] = useState<IconData | null>(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const slugs = iconSlugs.map((icon) => icon.slug);
    fetchSimpleIcons({ slugs })
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching icons:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return iconSlugs.map(({ slug, label }) => {
      const icon = renderCustomIcon(data.simpleIcons[slug], theme.theme);
      return { icon, label };
    });
  }, [data, iconSlugs, theme]);

  if (loading) {
    return <div>Loading icons...</div>; // Loading state
  }

  return (
    <div className="relative flex border-gray-800 border-2 gap-2 flex-wrap font-poppins w-10/12 px-8 mx-auto items-center justify-center overflow-hidden rounded-lg bg-background py-8 mt-12">
      <div className="flex w-full justify-center ">My Tech Toolbox</div>
      {renderedIcons?.map(({ icon, label }, index) => (
        <div
          key={`icon-${index}`}
          className="border-2 border-white px-2 rounded-xl group hover:scale-110 transition-all ease duration-300"
          role="button"
          aria-label={label}
        >
          {/* <CoolMode> */}
          <Button className="relative flex items-center justify-center bg-transparent p-0 m-0 hover:bg-transparent cursor-default">
            <span className="inline-flex size-4 flex-col items-center mx-2 group-hover:scale-75 transition-all ease duration-300">
              {icon}
            </span>
            <span className="text-sm group-hover:scale-110 transition-all ease duration-300">
              {label}
            </span>
          </Button>
          {/* </CoolMode> */}
        </div>
      ))}
      {/* <BorderBeam size={1000} duration={12} delay={9} /> */}
    </div>
  );
};
