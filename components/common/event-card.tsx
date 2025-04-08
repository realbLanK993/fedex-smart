// src/components/common/event-card.tsx (Modifications shown)
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { ArrowRight, Calendar, Mic } from "lucide-react"; // Added Calendar, Mic icons
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function EventCard({
  title,
  description,
  tag,
  date, // Add date prop
  speaker, // Add optional speaker prop
  affiliation, // Add optional affiliation prop
  learn_more_link,
  img_link,
}: {
  title: string;
  description: string;
  tag: string;
  date: Date; // Expect a Date object
  speaker?: string;
  affiliation?: string;
  learn_more_link?: string; // Make link optional
  img_link: string;
}) {
  return (
    <Card className="w-full md:max-w-[500px] overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <CardContent className="p-0 relative aspect-video md:aspect-[16/10]">
        <Image
          src={img_link}
          className="object-cover"
          alt={title || "Event Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // priority // Consider adding based on index
        />
      </CardContent>
      <CardHeader className="p-4 md:p-6 flex-grow">
        <div className="flex justify-between items-start gap-2 mb-3">
          {/* Tag Badge */}
          <Badge
            variant="secondary"
            className="text-xs font-semibold uppercase tracking-wider"
          >
            {tag}
          </Badge>
          {/* Date Display */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
            <Calendar className="h-3.5 w-3.5" />
            {date.toDateString()}
          </div>
        </div>
        <CardTitle className="text-lg mb-1">{title}</CardTitle>
        {/* Optional Speaker Display */}
        {speaker && (
          <div className="flex items-center gap-1.5 text-xs text-primary mb-2">
            <Mic className="h-3.5 w-3.5 min-w-6" />
            <span>
              {speaker} {affiliation && `(${affiliation})`}
            </span>
          </div>
        )}
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      {learn_more_link && ( // Conditionally render footer if link exists
        <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-auto rounded-full hover:bg-primary hover:text-primary-foreground group"
          >
            <Link href={learn_more_link}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      )}
      {/* Add spacer if no footer */}
      {!learn_more_link && <div className="h-12 md:h-[52px]"></div>}
    </Card>
  );
}
