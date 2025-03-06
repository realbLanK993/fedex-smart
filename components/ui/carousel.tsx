"use client"

import {useEffect, useRef, useState} from "react";
import { Button } from "./button";
import {ChevronLeft, ChevronRight} from "lucide-react"
import { Progress } from "@/components/ui/progress";

const DELAY = 1000;
const PROGRESS_UPDATE = 10
const totalDuration = (len:number) => {
    return len * DELAY
}
const progress = (currentIndex: number, len:number) => {
    return ((currentIndex + 1) * DELAY * 100) / totalDuration(len);
}


export function Carousel({autoplay=false}:{autoplay?:boolean}) {
    const arr = Array.from({ length: 4 }, (_, index) => index + 1);
    const updatedValue = useRef(((1 / arr.length) * PROGRESS_UPDATE) / DELAY) // This is the value that should be passed to the progress component when it autoplays
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentTime, setCurrentTime] = useState(25)
    const nextSlide = () => {
        const isLastSlide = currentIndex === arr.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        
    }
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? arr.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    
    // useEffect(() =>{
    //     if(autoplay){
    //         const interval = setInterval(() => {
    //           setCurrentTime((prev) => prev + updatedValue.current);
    //         }, PROGRESS_UPDATE);
    //         return () => clearInterval(interval);
    //     }
    // },[currentTime])
    useEffect(() => {
        setCurrentTime(() => {
          return progress(currentIndex, arr.length);
        });
        if(autoplay){
            const interval = setInterval(() => {
              nextSlide();
            }, DELAY);
            return () => clearInterval(interval);
        }
    }, [currentIndex])
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden">
        <div className="flex">
          {arr.map((item, index) => (
            <div
              key={index}
              className={`min-w-[0px] shrink-0 grow-0 transition-all duration-500 ease-in-out ${
                currentIndex == index ? "basis-3/4" : "basis-1/12"
              }`}
            >
              <div
                className={`border rounded-lg flex justify-center items-center mr-1 ${
                  currentIndex == index ? "h-[400px]" : " h-full"
                }`}
              >
                <span
                  className={` ${currentIndex != index ? "-rotate-90" : ""}`}
                >
                  {/* Content to be written here */}
                  Slide {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex max-w-[300px] w-full gap-2 justify-center items-center">
          <span>{currentIndex + 1} </span>
          <Progress className="" value={currentTime} />
          <span> {arr.length} </span>
        </div>
        <div className="flex gap-4">
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
