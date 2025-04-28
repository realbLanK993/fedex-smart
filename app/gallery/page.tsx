"use client"; // This component needs client-side interactivity (useState, onClick)

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions"; // Import captions plugin

// Import lightbox styles
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css"; // Import captions plugin styles
import { GalleryImage } from "@/lib/types";

const galleryData: GalleryImage[] = [
  {
    id: 3,
    src: "/gallery/image1.jpg",
    alt: "Research Presentation",
    description: "Description 1",
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    src: "/gallery/image2.jpg",
    alt: "Visit by prof.",
    description: "Description 2",
    width: 900,
    height: 600,
  },
  // Add more images following this structure...
  // Make sure the image files exist in your /public/gallery/ directory
];

export default function GalleryPage() {
  const [index, setIndex] = useState(-1); // State to track the open image index (-1 means closed)

  // Prepare slides data for the lightbox, including descriptions for the caption plugin
  const slides = galleryData.map(
    ({ src, alt, width, height, description }) => ({
      src: src,
      alt: alt,
      width: width,
      height: height,
      description: description, // Pass description here
    })
  );

  return (
    <div className="defined-width mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
        Our Gallery
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
        Explore moments from our events, research activities, collaborations,
        and technological showcases at the FedEx SMART Center.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryData.map((image, idx) => (
          <div
            key={image.id}
            className="aspect-square overflow-hidden rounded-md cursor-pointer group relative shadow-md border border-border/50 hover:border-primary/60"
            onClick={() => setIndex(idx)} // Set the index of the clicked image
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              priority={idx < 10} // Prioritize loading the first few images
            />
            {/* Optional overlay effect on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        plugins={[Captions]} // Enable the captions plugin
        captions={{ descriptionTextAlign: "center" }} // Optional: Center align caption text
        open={index >= 0} // Open if index is 0 or greater
        index={index} // Tell the lightbox which image to show
        close={() => setIndex(-1)} // Function to close the lightbox
        slides={slides} // Provide the array of slide objects
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .85)" } }} // Optional: Darker background
      />
    </div>
  );
}
