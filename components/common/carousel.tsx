"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

type CarouselProps = {
  arr: {
    img: string;
    title: string;
  }[];
  autoplay?: boolean;
  DELAY?: number;
};

export function Carousel({ arr, autoplay, DELAY = 3000 }: CarouselProps) {
  const totalDuration = (len: number) => {
    return len * DELAY;
  };
  const progress = (currentIndex: number, len: number) => {
    return ((currentIndex + 1) * DELAY * 100) / totalDuration(len);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const nextSlide = () => {
    const isLastSlide = currentIndex === arr.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? arr.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //   if (autoplay) {
  //     const interval = setInterval(() => {
  //       setCurrentTime((prev) => prev + updatedValue.current);
  //     }, PROGRESS_UPDATE);
  //     return () => clearInterval(interval);
  //   }
  // }, [currentTime]);
  useEffect(() => {
    setCurrentTime(() => {
      return progress(currentIndex, arr.length);
    });
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, DELAY);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden">
        <div className="flex">
          {arr.map((item, index) => (
            <div
              key={index}
              className={`min-w-[0px] shrink-0 grow-0 transition-all duration-500 ease-in-out ${
                currentIndex == index
                  ? "lg:basis-3/4 w-full"
                  : "lg:basis-1/12 hidden lg:block"
              }`}
            >
              <div
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={`border relative  cursor-pointer overflow-hidden rounded-lg h-[300px] object-contain md:h-[400px] flex justify-center items-center mr-4`}
              >
                {currentIndex == index && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-t-lg "
                    width={400}
                    height={400}
                  />
                )}
                <span
                  className={` font-bold transition-opacity duration-500 ease-in-out select-none ${
                    currentIndex != index
                      ? "-rotate-90 inline-block opacity-100 min-w-[350px] text-xl"
                      : "absolute z-30 bottom-3 text-3xl opacity-100 right-10 text-white"
                  }`}
                >
                  {/* Content to be written here */}
                  {item.title}
                </span>
                {currentIndex == index && (
                  <div className="absolute bottom-0 bg-black/20 w-full h-[70px] backdrop-blur" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" md:flex max-w-[300px] w-full gap-2 justify-center items-center hidden">
          {/* <span>{currentIndex + 1} </span> */}
          <Progress className="" value={currentTime} />
          {/* <span> {arr.length} </span> */}
        </div>
        <span className="md:hidden w-full">
          {currentIndex + 1 + " - " + arr.length}
        </span>
        <div className="flex gap-4 justify-end w-full">
          <Button onClick={prevSlide} className="rounded-full" size={"icon"}>
            {" "}
            <ChevronLeft />{" "}
          </Button>
          <Button onClick={nextSlide} className="rounded-full" size={"icon"}>
            {" "}
            <ChevronRight />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
