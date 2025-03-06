import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import EventCard from "@/components/ui/event-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="defined-width flex flex-col gap-8">
      <Hero />
      <p className="text-xl font-bold">Latest Events</p>
      <EventCard
        title="Event 1"
        description="Event 1 description"
        tag="Tag 1"
        learn_more_link="#"
        img_link="https://images.pexels.com/photos/30374507/pexels-photo-30374507/free-photo-of-black-and-white-houses-by-the-norwegian-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Carousel />
    </main>
  );
}
