import { Share, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CommonPageProps } from "@/lib/types";
import FacultyCard from "./faculty-card";

export default function CommonPage({
  type,
  title,
  date,
  links,
  header_img_link,
  content,
  faculty,
}: CommonPageProps) {
  return (
    <div className="max-w-[1000px] flex flex-col gap-8 pt-32">
      <header className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-sm">{type}</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          <span className="text-sm">{date} </span>
        </div>
        <Button
          variant={"outline"}
          className="flex gap-4 justify-center items-center rounded-full"
        >
          {" "}
          <Share2 /> Share
        </Button>
        <Image
          src={header_img_link}
          className="w-2/3 rounded-lg"
          alt={`${title} depiction`}
          width={400}
          height={400}
        />
      </header>
      <div className="flex flex-col gap-4">{content}</div>
      <div className="flex flex-col gap-8">
        <p className="font-bold text-xl">Faculty Members</p>
        <div className="flex flex-wrap gap-4 w-full">
          {faculty.map((person, index) => [
            <FacultyCard
              key={index}
              name={person.name}
              designation={person.designation}
              location={person.location}
            />,
          ])}
        </div>
      </div>
    </div>
  );
}
