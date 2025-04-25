import { Share2 } from "lucide-react";
import Image from "next/image";
import { CommonPageProps } from "@/lib/types";
import FacultyCard from "./faculty-card";
import CopyBtn from "./copy-btn";
import { Badge } from "../ui/badge";

export default function CommonPage({
  type,
  title,
  date,
  header_img_link,
  content,
  faculty,
  judges,
}: CommonPageProps) {
  return (
    <div className="max-w-[1000px] w-full flex flex-col gap-8 pt-24 pb-24">
      <header className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <Badge
            variant={"outline"}
            className="text-sm rounded-full hover:bg-primary hover:text-primary-foreground select-none"
          >
            {type}
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center">
            {title}
          </h1>
          <span className="text-sm">{date} </span>
        </div>
        <CopyBtn>
          <>
            <Share2 /> Share
          </>
        </CopyBtn>
        <Image
          src={header_img_link}
          className="w-full rounded-lg"
          alt={`${title} depiction`}
          width={1920}
          height={1080}
        />
      </header>
      <div className="flex flex-col justify-center items-center w-full">
        <article
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose dark:prose-invert"
        />
      </div>
      {(faculty || judges) && (
        <div className="flex flex-col gap-8">
          <p className="font-bold text-xl">Faculty Members</p>
          {faculty && (
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
          )}
        </div>
      )}
    </div>
  );
}
