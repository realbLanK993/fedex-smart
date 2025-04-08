import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust import path if needed
import { Button } from "@/components/ui/button"; // Adjust import path if needed
import { Badge } from "@/components/ui/badge"; // Adjust import path if needed
import { ArrowRight, Users } from "lucide-react"; // Or appropriate icons

// Define the props the component expects
interface ProjectCardProps {
  title: string;
  vertical: string; // Name of the vertical
  pis: string[]; // List of PI names (include "(PI)" for lead)
  description: string; // Summary of objectives
  imageUrl?: string; // Optional conceptual image
  link?: string; // Optional link to detailed page/section
}

export function ProjectCard({
  title,
  vertical,
  pis,
  description,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg border border-border hover:border-primary/50">
      {/* Optional Image Area */}
      {imageUrl && (
        <CardContent className="p-0 relative aspect-video border-b border-border/50">
          {" "}
          {/* Fixed aspect ratio */}
          <Image
            src={imageUrl}
            alt={`Concept image for ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw" // Adjust sizes as needed
            className="object-cover"
          />
        </CardContent>
      )}

      {/* Content Area */}
      <CardHeader className="p-4 md:p-6 pb-3">
        {/* Vertical Badge */}
        <Badge
          variant="secondary"
          className="mb-3 text-xs font-medium uppercase tracking-wider w-fit"
        >
          {vertical}
        </Badge>
        {/* Project Title */}
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        {/* PI List */}
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <Users className="h-4 w-4 mr-2 flex-shrink-0" />
          {/* Join PIs, maybe limit display length slightly if too long */}
          <span>{pis.join(", ")}</span>
        </div>
      </CardHeader>

      {/* Description */}
      <CardContent className="p-4 md:p-6 pt-0 flex-grow">
        {" "}
        {/* flex-grow pushes footer down */}
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>

      {/* Optional Footer Link */}
      {link && (
        <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
          {" "}
          {/* mt-auto ensures it stays at bottom */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-auto rounded-full hover:bg-primary hover:text-primary-foreground group"
          >
            <Link href={link}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
      {/* Add spacer if no footer to help alignment in grid */}
      {!link && <div className="h-12 md:h-[52px]"></div>}
    </Card>
  );
}
