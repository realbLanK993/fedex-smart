import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust import path if needed

// Define the props
interface HighlightCardProps {
  icon: React.ReactNode; // Icon component (e.g., from lucide-react)
  title: string;
  description: string;
}

export function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg border border-border hover:border-primary/50">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        {/* Icon with Accent Background */}
        <div className="p-2 bg-accent rounded-md">
          {" "}
          {/* Using Accent color bg */}
          {React.cloneElement(icon as React.ReactElement, {
            className: "h-6 w-6 text-accent-foreground", // Use accent text color
          })}
        </div>
        {/* Title */}
        <div className="flex-1">
          <CardTitle className="text-base font-semibold">{title}</CardTitle>{" "}
          {/* Slightly smaller title */}
        </div>
      </CardHeader>
      {/* Description */}
      <CardContent className="flex-grow pt-0">
        {" "}
        {/* Remove top padding */}
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
