"use client";
import { cn } from "@/lib/utils";
import { cubicBezier, motion } from "framer-motion";

export default function AnimatedText({
  text,
  className,
  childClass,
}: {
  text: string;
  className?: string;
  childClass?: string;
}) {
  const finalTextArr =
    text.split(" ").length > 1 ? text.split(" ") : text.split("");
  const DURATION = text.split(" ").length > 1 ? 0.5 : 0.75;
  const STAGGER = text.split(" ").length > 1 ? 0.07 : 0.025;
  return (
    <motion.div
      className={cn(
        "w-full h-full flex justify-center items-center",
        className
      )}
      initial="initial"
      whileHover={"hovered"}
    >
      <motion.h1
        className={cn(
          " overflow-hidden relative block whitespace-nowrap select-none"
        )}
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
        <div className={cn("absolute inset-0 flex gap-1", childClass)}>
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
    </motion.div>
  );
}
