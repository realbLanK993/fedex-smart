import Link from "next/link"; // Import Link for the button
import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/common/carousel";
import EventCard from "@/components/common/event-card";
import { EventItem } from "@/lib/types";
import { eventsListData } from "@/lib/data";
import AnimatedText from "@/components/common/rolling-text";
import { StatsCard } from "@/components/common/stats-card";

// --- Helper function to get latest events ---
function getLatestEvents(allEvents: EventItem[], count: number): EventItem[] {
  // Sort events by date, newest first
  const sortedEvents = [...allEvents].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  // Return the latest 'count' events
  return sortedEvents.slice(0, count);
}

// --- Static Carousel Data (remains the same) ---
const carouselArr = [
  {
    img: "/slide-pics/supply-chain-sustainability.webp",
    title: "Supply Chain Sustainability",
  },
  {
    img: "/slide-pics/worker-wellness.webp",
    title: "Logistics Worker Wellness",
  },
  {
    img: "/slide-pics/ml-algo.webp",
    title: "Algorithms and Machine Learning",
  },
  {
    img: "/slide-pics/logistics-infra.webp",
    title: "Logistics Infrastructure",
  },
];

// --- Home Page Component ---
export default function Home() {
  // Get the latest 2 or 3 events
  const latestEvents = getLatestEvents(eventsListData, 2); // Show the 2 most recent events

  return (
    <main className="defined-width flex flex-col gap-24 md:gap-32 p-6 md:p-8 lg:p-12">
      <Hero />

      <section>
        <StatsCard />
      </section>
      <div className="flex flex-col gap-16 md:gap-20">
        {/* --- Latest Events Section --- */}
        <section className="flex flex-col gap-8 p-6 rounded-lg">
          {" "}
          {/* Added background */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xl font-bold text-primary">Latest Events</p>
            {/* Link the button to the events page */}
            <Button asChild className="rounded-full">
              <Link href="/events" className="text-primary text-sm">
                <AnimatedText text="View All Events" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:justify-start gap-4 md:gap-6">
            {/* Map over the latest events */}
            {latestEvents.map((item) => (
              <EventCard
                key={item.id} // Use unique ID from data
                title={item.title}
                description={item.description}
                tag={item.tag}
                date={item.date} // Pass the date object
                speaker={item.speaker} // Pass optional speaker
                affiliation={item.affiliation} // Pass optional affiliation
                learn_more_link={`/events/${item.slug}`}
                img_link={item.img_link}
              />
            ))}
            {/* Optional: Message if no events */}
            {latestEvents.length === 0 && (
              <p className="text-muted-foreground w-full text-center">
                No recent events to display.
              </p>
            )}
          </div>
        </section>

        {/* --- Core Research Section --- */}
        <section className="flex flex-col gap-8 p-6 rounded-lg">
          {" "}
          {/* Added background */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xl font-bold text-primary">
              Core Research Areas
            </p>
            {/* Link the button to the research page */}
            <Button asChild className="rounded-full">
              <Link href="/research">
                <AnimatedText text="Learn More" />
              </Link>
            </Button>
          </div>
          <Carousel arr={carouselArr} />
        </section>
      </div>
    </main>
  );
}
