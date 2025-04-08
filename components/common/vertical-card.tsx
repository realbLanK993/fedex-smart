import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface VerticalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function VerticalCard({
  icon,
  link,
  title,
  description,
}: VerticalCardProps) {
  return (
    <Link href={link}>
      <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg border border-border hover:border-primary/50">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
          <div className="p-2 bg-muted rounded-md">
            {React.cloneElement(icon as React.ReactElement, {
              className: `h-6 w-6 text-primary`,
            })}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
