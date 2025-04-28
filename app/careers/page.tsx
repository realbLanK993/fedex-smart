"use client"; // Needed for useState

import React, { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OpportunityItem } from "@/lib/types";
import { opportunitiesData, opportunityTypes } from "@/lib/data";
import OpportunityListItem from "@/components/common/career-list-item";
import Link from "next/link";

type FilterType = OpportunityItem["type"] | "All Opportunities";

export default function CareersPage() {
  const [selectedType, setSelectedType] =
    useState<FilterType>("All Opportunities");

  // Memoize filtered list
  const filteredOpportunities = useMemo(() => {
    if (selectedType === "All Opportunities") {
      return opportunitiesData;
    }
    return opportunitiesData.filter((item) => item.type === selectedType);
  }, [selectedType]); // Recalculate only when selectedType changes

  return (
    <main className="defined-width px-4 py-16 flex flex-col gap-12 ">
      {/* Header Section */}
      <section className="">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Careers & Opportunities
        </h1>
        <p className="text-muted-foreground">
          Join the FedEx SMART Center at IIT Madras - a hub of innovation
          bridging industry and academia. We tackle complex logistics challenges
          through cutting-edge research in sustainability, AI/ML, worker
          wellness, and infrastructure. Explore opportunities to contribute to
          impactful projects in a dynamic environment. While specific openings
          vary, we welcome inquiries for potential collaborations and future
          roles.
        </p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
        <Select
          value={selectedType}
          onValueChange={(value) => setSelectedType(value as FilterType)} // Update state on change
        >
          <SelectTrigger
            id="opportunity-filter"
            className="max-w-xs w-full rounded-full border-primary/50 focus:ring-primary"
          >
            <SelectValue placeholder="Select Opportunity Type" />
          </SelectTrigger>
          <SelectContent>
            {opportunityTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>

      {/* Opportunities List Section */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Current Listings & Areas of Interest
        </h2>
        <div className="border-t border-border/80">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((item) => (
              <OpportunityListItem
                key={item.id}
                title={item.title}
                type={item.type}
                status={item.status}
                description={item.description} // Concise description displayed
                link={item.link}
              />
            ))
          ) : (
            <p className="py-10 text-center text-muted-foreground">
              No opportunities found for the selected type.
            </p>
          )}
        </div>
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>
            Specific openings are posted as they become available. For inquiries
            about potential research collaborations or future opportunities,
            please{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
