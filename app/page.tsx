import Link from "next/link"; // Import Link for the button
import Hero from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/common/carousel";
import EventCard from "@/components/common/event-card";
import { EventItem } from "@/lib/types";
import { eventsData } from "@/lib/data";

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
    img: "https://images.pexels.com/photos/7048040/pexels-photo-7048040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Supply Chain Sustainability",
  },
  {
    img: "https://images.pexels.com/photos/13804488/pexels-photo-13804488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Logistics Worker Wellness",
  },
  {
    img: "https://images.pexels.com/photos/17483870/pexels-photo-17483870/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-proje.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Algorithms and Machine Learning",
  },
  {
    img: "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Logistics Infrastructure",
  },
];

// --- Home Page Component ---
export default function Home() {
  // Get the latest 2 or 3 events
  const latestEvents = getLatestEvents(eventsData, 2); // Show the 2 most recent events

  return (
    <main className="defined-width flex flex-col gap-24 md:gap-32 p-6 md:p-8 lg:p-12">
      <Hero />

      <div className="flex flex-col gap-16 md:gap-20">
        {/* --- Latest Events Section --- */}
        <section className="flex flex-col gap-8 p-6 rounded-lg bg-muted/30">
          {" "}
          {/* Added background */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xl font-bold text-primary">Latest Events</p>
            {/* Link the button to the events page */}
            <Button asChild className="rounded-full">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
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
                learn_more_link={item.learn_more_link}
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
        <section className="flex flex-col gap-8 p-6 rounded-lg bg-muted/30">
          {" "}
          {/* Added background */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xl font-bold text-primary">
              Core Research Verticals
            </p>
            {/* Link the button to the research page */}
            <Button asChild className="rounded-full">
              <Link href="/research">Learn more</Link>
            </Button>
          </div>
          <Carousel arr={carouselArr} />
        </section>
      </div>
    </main>
  );
}
