"use client"; // Required for Framer Motion hooks and useEffect

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, animate } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path if needed
import { Users, Briefcase, FolderGit2 } from "lucide-react"; // Example icons

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  unit?: string; // Optional unit like '+'
  isInView: boolean; // Pass isInView to trigger animation
}

// Helper component to animate numbers counting up
const AnimatedNumber: React.FC<{
  value: number;
  isInView: boolean;
  delay?: number;
}> = ({ value, isInView, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls
        .start({
          // We don't actually animate the component itself here,
          // but use its start sequence to trigger the number animation
        })
        .then(() => {
          const node = ref.current;
          if (!node) return;

          const animationControls = animate(0, value, {
            duration: 1.5, // Adjust duration as needed
            delay: delay, // Apply individual delay
            ease: "easeOut", // Smoother easing
            onUpdate(latest) {
              node.textContent = Math.round(latest).toString();
            },
          });
          // Optional: return cleanup function to stop animation if component unmounts during animation
          return () => animationControls.stop();
        });
    } else {
      // Optionally reset the number when out of view
      if (ref.current) {
        ref.current.textContent = "0";
      }
    }
  }, [isInView, value, controls, delay]);

  return <span ref={ref}>0</span>; // Initial display
};

const StatItem: React.FC<StatItemProps> = ({
  icon: Icon,
  value,
  label,
  unit,
  isInView,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center p-4"
      variants={itemVariants} // Use variants for item animation within stagger
    >
      <Icon className="w-10 h-10 mb-3 text-primary" />
      <div className="text-4xl font-bold tracking-tighter">
        <AnimatedNumber value={value} isInView={isInView} />
        {unit && <span>{unit}</span>}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

export const StatsCard: React.FC = () => {
  const ref = useRef(null);
  // useInView detects when the component is in the viewport
  const isInView = useInView(ref, {
    once: true, // Only trigger once
    margin: "-100px 0px", // Trigger slightly before it's fully in view
  });
  const controls = useAnimation();

  // Define animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        // Stagger children animations for a nice effect
        staggerChildren: 0.2, // Each child animates 0.2s after the previous one
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // controls.start("hidden"); // Optional: reset if it goes out of view and `once` is false
    }
  }, [isInView, controls]);

  const stats = [
    { icon: Users, value: 19, label: "Faculty Members" },
    { icon: Briefcase, value: 50, label: "Project Staff" },
    { icon: FolderGit2, value: 34, label: "Ongoing Projects", unit: "+" },
  ];

  return (
    <motion.div
      ref={ref} // Attach ref for useInView
      initial="hidden"
      animate={controls} // Control animation based on isInView
      variants={containerVariants}
    >
      <Card className="w-full max-w-3xl mx-auto shadow-lg">
        {" "}
        {/* Adjust max-width as needed */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Our Team & Impact
          </CardTitle>
          {/* Optional: <CardDescription>Key figures at a glance</CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* Use motion.div here if CardContent itself shouldn't animate */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {stats.map((stat, index) => (
              // Pass isInView down to control number animation start
              <StatItem key={index} {...stat} isInView={isInView} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
