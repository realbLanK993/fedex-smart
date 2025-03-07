import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel } from "@/components/common/carousel";
import EventCard from "@/components/common/event-card";
import Image from "next/image";

const eventArr = [
  {
    title: "Event 1",
    description: "Event 1 description",
    tag: "Seminar",
    learn_more_link: "#",
    img_link:
      "https://images.pexels.com/photos/30374507/pexels-photo-30374507/free-photo-of-black-and-white-houses-by-the-norwegian-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Event 2",
    description: "Event 2 description",
    tag: "Hackathon",
    learn_more_link: "#",
    img_link:
      "https://images.pexels.com/photos/30374507/pexels-photo-30374507/free-photo-of-black-and-white-houses-by-the-norwegian-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const carouselArr = [
  {
    img: "https://images.pexels.com/photos/716565/pexels-photo-716565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title One",
  },
  {
    img: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title Two",
  },
  {
    img: "https://images.pexels.com/photos/2387966/pexels-photo-2387966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "This is a very big title ",
  },
  {
    img: "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "This titlehasverybig words",
  },
];

export default function Home() {
  return (
    <main className="defined-width flex flex-col gap-32 p-6 md:p-8 lg:p-12">
      <Hero />
      <div className="flex flex-col gap-16">
        <section className="flex flex-col gap-8">
          <div className="flex justify-between">
            <p className="text-xl font-bold">Latest Events</p>
            <Button variant={"outline"} className="rounded-full">View All</Button>
          </div>
          <div className="flex flex-wrap justify-center items-center lg:justify-start gap-4">
            {
              eventArr.map((item, index) => {
                return (
                  <EventCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    tag={item.tag}
                    learn_more_link={item.learn_more_link}
                    img_link={item.img_link}
                  />
                );
              })
            }
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <div className="flex justify-between">
            <p className="text-xl font-bold">Core Research</p>
            <Button variant={"outline"} className="rounded-full">Learn more</Button>
          </div>
          <Carousel arr={carouselArr} />
        </section>
      </div>
    </main>
  );
}
