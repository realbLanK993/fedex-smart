import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react"; // Or ArrowRight

// Define the props the component expects
interface TeamMemberCardProps {
  imageUrl?: string; // Optional for now, use placeholder if missing
  name: string;
  title: string; // e.g., "Professor, Dept. of Management Studies" or "Lead PI, Sustainability"
  profileLink?: string; // Link to their IITM profile or relevant page
}

export function TeamMemberCard({
  imageUrl,
  name,
  title,
  profileLink,
}: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg border border-border hover:border-primary/50">
      {/* Image Area */}
      <div className="relative w-full h-48 bg-muted">
        {" "}
        {/* Fixed height for image area */}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            fill // Cover the area
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Example sizes
            className="object-cover" // Crop to fit
          />
        ) : (
          // Placeholder if no image
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80">
            <svg
              className="w-12 h-12 text-muted-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {/* Content Area */}
      <CardHeader className="pt-4 pb-2">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <CardDescription className="text-sm">{title}</CardDescription>
      </CardHeader>

      {/* Optional Footer for Link Button */}
      {profileLink && (
        <CardFooter className="pt-2 pb-4 mt-auto">
          {" "}
          {/* mt-auto pushes footer down */}
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link href={profileLink} target="_blank" rel="noopener noreferrer">
              {" "}
              {/* Open profile in new tab */}
              View Profile <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
      {/* Add a spacer if no footer to help align cards in a grid */}
      {!profileLink && <div className="h-12"></div>}
    </Card>
  );
}
