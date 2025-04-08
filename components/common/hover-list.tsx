// src/components/common/HoverList.tsx
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import icon

interface HoverListProps {
  title: string;
  vertical: string; // Add vertical prop
  slug: string; // Use slug for link
  className?: string;
}

export default function HoverList({
  title,
  vertical,
  slug,
  className,
}: HoverListProps) {
  const linkPath = `/research/${slug}`; // Construct the link path

  return (
    <Link href={linkPath} className="group block">
      {" "}
      {/* Added group class for icon hover */}
      <div
        className={twMerge(
          "border-b border-border/80 py-6 px-4 md:py-8 md:px-8 flex justify-between items-center gap-4 w-full hover:bg-accent transition-colors duration-200", // Use accent for hover, consistent padding
          className
        )}
      >
        {/* Left side: Title and Vertical */}
        <div>
          {/* Use primary color for title for emphasis */}
          <p className=" md:text-2xl font-medium text-primary mb-1">
            {" "}
            {title}{" "}
          </p>
          {/* Use muted foreground for the vertical */}
          <p className="text-sm text-muted-foreground">{vertical}</p>
        </div>

        {/* Right side: Learn More Icon */}
        {/* Icon only appears on hover using group-hover */}
        <div className="hidden md:block text-primary transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          <ArrowRight className="h-6 w-6" />
        </div>
        {/* Simple Arrow for mobile */}
        <div className="block md:hidden text-muted-foreground">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
