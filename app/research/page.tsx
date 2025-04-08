"use client"; // Needed for useState

import React, { useState, useMemo } from "react";
import HoverList from "@/components/common/hover-list"; // Adjust path
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Adjust path
import { researchListData, researchVerticals } from "@/lib/data";

// src/data/researchListData.ts

// Extract unique verticals for the filter dropdown

export default function ResearchPage() {
  const [selectedVertical, setSelectedVertical] =
    useState<string>("All Research");

  // Memoize filtered list to avoid recalculation on every render
  const filteredResearch = useMemo(() => {
    if (selectedVertical === "All Research") {
      return researchListData;
    }
    return researchListData.filter(
      (item) => item.vertical === selectedVertical
    );
  }, [selectedVertical]); // Recalculate only when selectedVertical changes

  return (
    // Use defined-width if it's a global class you have, otherwise use container
    <main className="defined-width flex flex-col gap-16 p-8 lg:p-12 xl:px-0">
      {/* Header Section - More Minimalist */}
      <section className="">
        {" "}
        {/* Limit width for readability */}
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Our Research Landscape
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the ongoing research projects and technological explorations
          at the FedEx SMART Centre, driving innovation across the logistics
          spectrum. Filter by core vertical below.
        </p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
        {/* <Label htmlFor="research-filter" className="text-sm font-medium shrink-0">Filter by Vertical:</Label> */}
        <Select
          value={selectedVertical}
          onValueChange={setSelectedVertical} // Update state on change
        >
          <SelectTrigger
            id="research-filter"
            className="max-w-xs w-full rounded-full border-primary/50 focus:ring-primary" // Add primary color hints
          >
            <SelectValue placeholder="Select Research Area" />
          </SelectTrigger>
          <SelectContent>
            {researchVerticals.map((vertical) => (
              <SelectItem key={vertical} value={vertical}>
                {vertical}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      {/* Research List Section */}
      <section>
        {/* Add top border to the container, not first item */}
        <div className="border-t border-border/80">
          {filteredResearch.length > 0 ? (
            filteredResearch.map((item) => (
              <HoverList
                key={item.id}
                title={item.title}
                vertical={item.vertical}
                slug={item.slug}
                // No special class needed for first item's top border anymore
              />
            ))
          ) : (
            <p className="py-10 text-center text-muted-foreground">
              No research found for the selected vertical.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
