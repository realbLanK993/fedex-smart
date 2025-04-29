// src/components/TeamMemberCard.tsx (Conceptual Changes)
import { Person } from "@/lib/types"; // Import Person type
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
// ... other imports ...

interface TeamMemberCardProps {
  person: Person; // Expect the full Person object
  roleTitle?: string; // Optional override/specific title
}

export function TeamMemberCard({ person }: TeamMemberCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg border border-border hover:border-primary/50">
      {/* Image Area */}
      <div className="relative w-full h-64 bg-muted">
        {" "}
        {/* Fixed height for image area */}
        {person.imageUrl ? (
          <Image
            src={person.imageUrl}
            alt={`Profile picture of ${person.name}`}
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
        <CardTitle className="text-lg font-semibold">{person.name}</CardTitle>
        <CardDescription className="text-sm">
          {person.designation}
        </CardDescription>
        <CardDescription className="text-sm">
          {person.department}
        </CardDescription>
      </CardHeader>

      {/* Optional Footer for Link Button */}
      {person.profileLink && (
        <CardFooter className="pt-2 pb-4 mt-auto">
          {" "}
          {/* mt-auto pushes footer down */}
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link
              href={person.profileLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Open profile in new tab */}
              View Profile <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
      {/* Add a spacer if no footer to help align cards in a grid */}
      {!person.profileLink && <div className="h-12"></div>}
    </Card>
  );
}
