"use client"; // Needed for useState

import React, { useState, useMemo } from "react";
import HoverList from "@/components/common/hover-list"; // Adjust path
import { Label } from "@/components/ui/label"; // Adjust path
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Adjust path

// src/data/researchListData.ts
export interface ResearchListItem {
  id: string;
  title: string;
  vertical: string; // e.g., "Sustainability", "Worker Wellness", "Algorithms & ML", "Infrastructure"
  slug: string; // Path for the detail page, e.g., "digital-sustainable-supply-chain"
}

export const researchListData: ResearchListItem[] = [
  // --- Main 5-Year Projects ---
  {
    id: "p1",
    title: "Digital and Sustainable Supply Chain Modelling & Analytics",
    vertical: "Supply Chain Sustainability",
    slug: "digital-sustainable-supply-chain",
  },
  {
    id: "p2",
    title:
      "Holistic Human-Machine Collaboration with Biomedical-Cognitive Measures",
    vertical: "Logistics Worker Wellness",
    slug: "human-machine-collaboration-wellness",
  },
  {
    id: "p3",
    title: "Accelerating Learning and Algorithms for Logistics Problems",
    vertical: "Algorithms & ML",
    slug: "accelerating-learning-algorithms",
  },
  {
    id: "p4",
    title: "Development of Modules for Integrating Autonomous Delivery Agents",
    vertical: "Logistics Infrastructure",
    slug: "autonomous-delivery-integration",
  },

  // --- Key Research Highlights (Derived from PPT/Website Content & detailed data) ---
  {
    id: "rl-rail-network", // Consistent ID
    title: "Reinforcement Learning for Rail Network Efficiency", // Consistent Title
    vertical: "Algorithms & ML",
    slug: "rl-rail-network", // Consistent Slug
  },
  {
    id: "drone-logistics-operations", // Consistent ID
    title: "Drone Delivery Operations & Feasibility (Mid/Last-Mile)", // Consistent Title
    vertical: "Logistics Infrastructure",
    slug: "drone-logistics-operations", // Consistent Slug
  },
  {
    id: "ev-fleet-charging-optimization", // Consistent ID
    title: "EV Fleet Size & Charging Network Optimization", // Consistent Title
    vertical: "Logistics Infrastructure",
    slug: "ev-fleet-charging-optimization", // Consistent Slug
  },
  {
    id: "worker-wellness-technologies", // Added
    title: "Technologies for Logistics Worker Wellness & Safety",
    vertical: "Logistics Worker Wellness",
    slug: "worker-wellness-technologies", // Added - Ensure this key exists in researchDetailsData
  },
  {
    id: "sustainable-resilient-last-mile", // Added
    title: "Sustainable & Resilient Last-Mile Distribution Framework",
    vertical: "Supply Chain Sustainability", // Or Infrastructure
    slug: "sustainable-resilient-last-mile", // Added - Ensure this key exists in researchDetailsData
  },
];

// Extract unique verticals for the filter dropdown
export const researchVerticals = [
  "All Research",
  ...Array.from(new Set(researchListData.map((item) => item.vertical))),
];

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
            filteredResearch.map((item, index) => (
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
