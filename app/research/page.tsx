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
import { researchListData, researchVerticals, verticalsData } from "@/lib/data";
import { VerticalCard } from "@/components/common/vertical-card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
          at the FedEx SMART Center, driving innovation across the logistics
          spectrum. Filter by core vertical below.
        </p>
      </section>
      <div className="space-y-16 md:space-y-24">
        {" "}
        {/* Add vertical space between sections */}
        {verticalsData.map((vertical, index) => (
          <section key={vertical.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image Block */}
              <div
                className={cn(
                  "relative aspect-video rounded-lg overflow-hidden shadow-lg border border-border/30",
                  // Apply order change for odd indices on medium screens and up
                  index % 2 !== 0 ? "md:order-last" : ""
                )}
              >
                <Image
                  src={vertical.imageUrl}
                  alt={`${vertical.title} concept image`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Content Block */}
              <div
                className={cn(
                  // Apply order change for odd indices on medium screens and up
                  index % 2 !== 0 ? "md:order-first" : ""
                )}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-md inline-flex">
                    {React.cloneElement(vertical.icon as React.ReactElement, {
                      className: "h-6 w-6 text-primary",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                    {vertical.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
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
