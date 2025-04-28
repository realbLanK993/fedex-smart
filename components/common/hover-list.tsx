// src/components/common/HoverList.tsx
"use client";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Import icon
import { cubicBezier, motion } from "framer-motion";

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
  const finalTextArr =
    title.split(" ").length > 1 ? title.split(" ") : title.split("");
  const DURATION = title.split(" ").length > 1 ? 0.5 : 0.75;
  const STAGGER = title.split(" ").length > 1 ? 0.07 : 0.025;
  const slashMotion = {
    initial: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hovered: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  return (
    <Link href={linkPath} className="group block">
      {" "}
      {/* Added group class for icon hover */}
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={twMerge(
          "border-b border-border/80 py-6 px-4 md:py-8 md:px-8 flex justify-between items-center gap-4 w-full hover:bg-accent transition-colors duration-200", // Use accent for hover, consistent padding
          className
        )}
      >
        {/* Left side: Title and Vertical */}
        <div>
          {/* Use primary color for title for emphasis */}
          <div className=" md:text-2xl font-medium text-primary mb-1 flex gap-1">
            <motion.h1
              className={
                " overflow-hidden relative block whitespace-nowrap select-none"
              }
            >
              <div className="flex gap-1">
                {finalTextArr.map((letter, i) => (
                  <motion.span
                    key={i}
                    transition={{
                      duration: DURATION,
                      ease: cubicBezier(0.25, 1, 0.5, 1),
                      delay: STAGGER * i,
                    }}
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className={"absolute inset-0 flex gap-1"}>
                {finalTextArr.map((letter, i) => (
                  <motion.span
                    key={i}
                    transition={{
                      duration: DURATION,
                      ease: cubicBezier(0.25, 1, 0.5, 1),
                      delay: STAGGER * i,
                    }}
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    className="block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
          </div>
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
      </motion.div>
    </Link>
  );
}
