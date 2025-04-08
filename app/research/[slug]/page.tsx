import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

// Adjust import paths as needed
import CommonPage from "@/components/common/common-page";
import { CommonPageProps } from "@/lib/types"; // Your type definition
import { researchListData } from "../page";
import { researchDetailsData } from "@/lib/data";

// Define the structure of the props passed to the page component
type Props = {
  params: { slug: string }; // Next.js passes dynamic route segments in params
};

// --- Generate Dynamic Metadata (Optional but recommended for SEO) ---
// This function generates metadata (like title, description) for each specific page
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata // Access parent metadata if needed
): Promise<Metadata> {
  const slug = params.slug;
  const pageData: CommonPageProps | undefined = researchDetailsData[slug];

  // Handle case where slug doesn't exist for metadata generation
  if (!pageData) {
    // Return default metadata or specific "Not Found" metadata
    return {
      title: "Research Not Found | FedEx SMART Centre",
      description: "The requested research topic could not be found.",
    };
  }

  // Generate a simple description from the content (remove HTML tags and truncate)
  const description =
    typeof pageData.content === "string"
      ? pageData.content
          .substring(0, 155)
          .replace(/<[^>]*>?/gm, "")
          .trim() + "..."
      : `Learn about the ${pageData.title} research at the FedEx SMART Centre.`;

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
  const pageData: CommonPageProps | undefined = researchDetailsData[slug];

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
