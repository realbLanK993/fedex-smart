"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutHeader() {
  return (
    <header className="flex justify-center items-center relative w-full rounded-xl p-8 md:p-16 lg:p-32">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold max-w-[500px] absolute z-[1] top-8 left-8"
      >
        Pioneering Sustainable & Intelligent Logistics Solutions
      </motion.h1>
      <motion.div className="relative w-full h-[400px] overflow-hidden">
        <motion.div
          initial={{ height: "200px" }}
          animate={{ height: 0 }}
          transition={{}}
          className="absolute left-0 right-0 top-0 bg-background w-full h-[1800px]"
        />
        <Image
          src={"/bg-about.jpg"}
          alt="Warehouse worker walking."
          width={800}
          height={1280}
          className="w-full"
        />
        <motion.div
          initial={{ height: "200px" }}
          animate={{ height: 0 }}
          transition={{}}
          className="absolute left-0 right-0 bottom-0 bg-background w-full h-[180px]"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl max-w-[500px] font-semibold absolute z-[1] bottom-8 right-8 text-right"
      >
        FedEx SMART
        <p>Smarter. Greener. Healthier.</p>
      </motion.h1>
    </header>
  );
}
