import { twMerge } from "tailwind-merge"
import { Button } from "../ui/button"
import Link from "next/link";

export default function HoverList({
    title,
    learn_more_link,
    img_link,
    className,
}:{
    title:string,
    learn_more_link:string,
    img_link?:string,
    className?:string
}){
    return (
      <Link href={"/research/one"}>
        <div
          className={twMerge(
            "border-b-2 p-8 justify-between gap-4 w-full flex hover:bg-secondary cursor-pointer",
            className
          )}
        >
          <p className="text-3xl max-w-[500px]"> {title} </p>
          <p className="rounded-full underline hidden md:block">Learn more</p>
        </div>
      </Link>
    );
}