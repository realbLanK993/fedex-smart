// src/components/common/OpportunityListItem.tsx
// No changes needed from the previous version provided,
// It will display the concise description from the updated opportunitiesData.
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import icons
import { Badge } from "@/components/ui/badge"; // Use Badge for type/status

interface OpportunityListItemProps {
  title: string;
  type: string; // Category like Internship, Postdoc
  status: string; // Like "Ongoing Interest", "Past Example"
  description: string;
  link?: string; // Optional link
  className?: string;
}

export default function OpportunityListItem({
  title,
  type,
  status,
  description,
  link = "#", // Default link to '#' if none provided
  className,
}: OpportunityListItemProps) {
  const isPlaceholderLink = link === "#";

  const linkContent = (
    <div
      className={twMerge(
        "border-b border-border/80 py-6 px-4 md:py-8 md:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full hover:bg-accent transition-colors duration-200",
        isPlaceholderLink ? "cursor-default" : "group cursor-pointer", // Adjust cursor based on link
        className
      )}
    >
      {/* Left side: Title, Description, Badges */}
      <div className="flex-grow">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="secondary">{type}</Badge>
          {/* Use different badge colors for status potentially */}
          <Badge
            variant={
              status === "Currently Open"
                ? "default"
                : status === "Completed"
                ? "outline"
                : "outline"
            }
          >
            {status}
          </Badge>{" "}
          {/* Adjusted badge style for Completed */}
        </div>
        <p className="text-xl md:text-2xl font-medium text-primary mb-1">
          {" "}
          {title}{" "}
        </p>
        <p className="text-sm text-muted-foreground">{description}</p>{" "}
        {/* Displays the concise description */}
      </div>

      {/* Right side: Learn More Icon (Conditional) */}
      {!isPlaceholderLink && (
        <div className="hidden md:block text-primary transition-opacity duration-200 opacity-0 group-hover:opacity-100 mt-2 sm:mt-0 shrink-0">
          <ArrowRight className="h-6 w-6" />
        </div>
      )}
      {!isPlaceholderLink && (
        <div className="block md:hidden text-primary mt-2 sm:mt-0 shrink-0">
          <ArrowRight className="h-5 w-5" />
        </div>
      )}
    </div>
  );

  // Render as a Link only if the link is not a placeholder '#'
  return !isPlaceholderLink ? (
    <Link href={link} className="block">
      {linkContent}
    </Link>
  ) : (
    // Render as a plain div if link is just '#'
    linkContent
  );
}
