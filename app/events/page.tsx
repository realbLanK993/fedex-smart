"use client";

import React, { useState, useMemo } from "react";
import EventCard from "@/components/common/event-card"; // Adjust path
import { Button } from "@/components/ui/button"; // Adjust path
import { EventItem } from "@/lib/types";
import { eventCategories, eventsData } from "@/lib/data";

type FilterType = EventItem["tag"] | "All";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  // Filter and Sort Events
  const sortedFilteredEvents = useMemo(() => {
    const filtered =
      activeFilter === "All"
        ? eventsData
        : eventsData.filter((event) => event.tag === activeFilter);

    // Sort by date, newest first
    return filtered.sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [activeFilter]);

  const allFilters: FilterType[] = ["All", ...eventCategories];

  return (
    <div className="defined-width px-4 py-16 md:py-24">
      {/* Header */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Activities & Events
        </h1>
        <p className=" text-muted-foreground max-w-3xl mx-auto">
          Explore past and upcoming seminars, workshops, hackathons, and other
          events hosted by or involving the FedEx SMART Centre.
        </p>
      </section>

      {/* Filter Controls */}
      <section className="mb-10 md:mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {allFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"} // Highlight active filter
              size="sm"
              className="rounded-full capitalize" // Capitalize tags like "Seminar"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section>
        {sortedFilteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sortedFilteredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                tag={event.tag}
                date={event.date} // Pass date object
                speaker={event.speaker} // Pass speaker
                affiliation={event.affiliation} // Pass affiliation
                learn_more_link={event.learn_more_link}
                img_link={event.img_link}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-10">
            No events found for the selected category.
          </p>
        )}
      </section>
    </div>
  );
}
