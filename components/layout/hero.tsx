"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroWords =
  | "Sustainable"
  | "Responsible"
  | "Future-Proof"
  | "Progressive"
  | "Resilient";

export default function Hero() {
  const arr: HeroWords[] = [
    "Sustainable",
    "Responsible",
    "Future-Proof",
    "Progressive",
    "Resilient",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        return (prev + 1) % arr.length;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <header className="flex flex-col gap-16 justify-center items-center min-h-[400px] p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center w-full flex flex-wrap gap-2 justify-center items-center">
        Revolutionizing Logistics for a{" "}
        <motion.span
          className="px-4 bg-primary text-primary-foreground rounded-full"
          key={current}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            ease: "easeIn",
            duration: 0.7,
          }}
        >
          {arr[current]}
        </motion.span>
        Tomorrow
      </h1>
      <div className="w-full max-h-[400px] h-full overflow-hidden">
        <Image
          src={`/hero/${current + 1}.jpg`}
          alt="People in lab"
          width={1200}
          height={800}
          className=""
        />
      </div>

      <p className="text-center">
        {`Welcome to the FedEx SMART Center at IIT Madras—where innovation meets
          impact. We’re pioneering greener supply chains, smarter technologies,
          and healthier logistics for a connected world.`}
      </p>
    </header>
  );
}
