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
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

// src/data/researchListData.ts

// Extract unique verticals for the filter dropdown

export default function ResearchPage() {
  const [selectedVertical, setSelectedVertical] =
    useState<string>("All Research");
  const [searchTerm, setSearchTerm] = useState<string>(""); // <-- Add state for search term

  // Memoize filtered list to avoid recalculation on every render
  const filteredResearch = useMemo(() => {
    // Start with the full list
    let results = researchListData;

    // Filter by vertical (if not "All Research")
    if (selectedVertical !== "All Research") {
      results = results.filter((item) => item.vertical === selectedVertical);
    }

    // Filter by search term (if search term is not empty)
    if (searchTerm.trim() !== "") {
      const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseSearchTerm) || // Check title
          item.vertical.toLowerCase().includes(lowerCaseSearchTerm) // Optionally check vertical too
        // You could add item.description check here if needed,
        // but might require adding description to researchListData
      );
    }

    return results;
  }, [selectedVertical, searchTerm]); // Add searchTerm to dependency array

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
        <p className="text-lg text-muted-foreground text-justify">
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
                <p className="text-muted-foreground mb-6 leading-relaxed  text-justify">
                  {vertical.description}
                </p>
                {/* Link */}
                <Link
                  href={`/research${vertical.link}`}
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  {/* Generate dynamic link text */}
                  Explore {vertical.title.split(" ")[0]} Research
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
      {/* Filter Section */}
      <section className="flex flex-col sm:flex-row sm:items-center gap-4 w-full mb-10">
        {/* Select Dropdown */}
        <Select value={selectedVertical} onValueChange={setSelectedVertical}>
          <SelectTrigger
            id="research-filter"
            className="w-full sm:max-w-xs rounded-full border-primary/50 focus:ring-primary"
          >
            <SelectValue placeholder="Filter by Vertical" />{" "}
            {/* Updated placeholder */}
          </SelectTrigger>
          <SelectContent>
            {researchVerticals.map((vertical) => (
              <SelectItem key={vertical} value={vertical}>
                {vertical}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          {" "}
          {/* Control width */}
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search research titles..."
            className="w-full rounded-full pl-9 border-primary/50 focus:ring-primary" // Add padding for icon
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search state
          />
        </div>
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
