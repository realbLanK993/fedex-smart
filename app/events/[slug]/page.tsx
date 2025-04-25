import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Adjust import paths as needed
import CommonPage from "@/components/common/common-page";
import { CommonPageProps } from "@/lib/types"; // Your type definition
import { eventDetailsData, eventsListData } from "@/lib/data";

// Define the structure of the props passed to the page component
type Props = {
  params: { slug: string }; // Next.js passes dynamic route segments in params
};

// --- Generate Static Paths (Optional but recommended for SSG) ---
// This function tells Next.js which 'slug' values exist and should be
// pre-rendered into static HTML pages at build time.
export async function generateStaticParams() {
  // Map over your list data to get all possible slugs
  return eventsListData.map((event) => ({
    slug: event.slug,
  }));

  // Alternative if your researchDetailsData keys are exactly the slugs:
  // return Object.keys(researchDetailsData).map(slug => ({ slug }));
}

// --- Generate Dynamic Metadata (Optional but recommended for SEO) ---
// This function generates metadata (like title, description) for each specific page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const pageData: CommonPageProps | undefined = eventDetailsData[slug];

  // Handle case where slug doesn't exist for metadata generation
  if (!pageData) {
    // Return default metadata or specific "Not Found" metadata
    return {
      title: "Research Not Found | FedEx SMART Centre",
      description: "The requested research topic could not be found.",
    };
  }

  const description = `Learn about the ${pageData.title} research at the FedEx SMART Centre.`;

  return {
    title: `${pageData.title} | FedEx SMART Centre Research`,
    description: description,
    // Add Open Graph data, etc., using pageData if desired
    openGraph: {
      title: pageData.title,
      description: description,
      images: pageData.header_img_link ? [pageData.header_img_link] : [],
      type: "article", // Or 'website'
    },
  };
}

// --- The Page Component ---
export default function ResearchDetailPage({ params }: Props) {
  const slug = params.slug;

  // Find the data for the current slug from our detailed data object
  const pageData: CommonPageProps | undefined = eventDetailsData[slug];

  // If no data is found for the given slug, render the 404 page
  if (!pageData) {
    notFound(); // This function is imported from 'next/navigation'
  }

  // If data is found, render the CommonPage component with the data
  return (
    // Add a container div if your CommonPage doesn't handle its own max-width/padding
    <div className=" px-4">
      <CommonPage {...pageData} />
    </div>
  );
}
