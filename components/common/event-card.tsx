import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { ArrowRight, ArrowUpRightFromSquare, Link2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function EventCard({
    title,
    description,
    tag,
    learn_more_link,
    img_link
}:{
    title:string,
    description:string,
    tag:string,
    learn_more_link:string,
    img_link:string
}) {
    return (
      <Card className="w-full md:max-w-[500px]">
        <CardContent className="p-0">
          <Image
            src={img_link}
            className="w-full object-contain rounded-t-lg"
            alt="Event Image"
            width={400}
            height={400}
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-start items-start gap-6 pt-2">
          <CardDescription>{tag}</CardDescription>
          <div className="flex flex-col gap-2">
            <CardTitle className="text-lg">{title}</CardTitle>
            <p>{description}</p>
          </div>
          <Link
            className="flex gap-2 justify-center items-center underline"
            href={learn_more_link}
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </CardFooter>
      </Card>
    );
}