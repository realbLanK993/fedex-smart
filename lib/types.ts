export type Faculty = {
  image?: string;
  designation: string;
  name: string;
  location: {
    department?: string;
    institution?: string;
  };
};
export type NavigationItem = {
  name: string;
  icon?: JSX.Element;
  href: string;
  color?: string;
  description?: string;
  subItems?: NavigationItem[];
};

export type CommonPageProps = {
  type: string;
  title: string;
  description?: string;
  date: string;
  links: {
    common: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
  header_img_link: string;
  content: string;
  faculty: Faculty[];
};

export interface GalleryImage {
  id: number;
  src: string; // Path to your image (can be local in /public or external URL)
  alt: string; // Alt text for the image
  description: string; // Description shown in the lightbox
  width: number; // Original image width (for next/image)
  height: number; // Original image height (for next/image)
}

// src/data/teamData.ts

export interface TeamMember {
  id: number | string; // Unique identifier
  imageUrl?: string; // Leave blank or use '/placeholder.jpg' for now
  name: string;
  title: string; // Can combine role and department or vertical affiliation
  profileLink?: string; // The link from your website content
}

export interface EventItem {
  id: string; // Unique identifier
  title: string;
  description: string;
  tag: "Seminar" | "Workshop" | "Hackathon" | "Other"; // Event type/category
  date: Date; // Use actual Date objects for sorting
  speaker?: string; // Optional: Speaker name
  affiliation?: string; // Optional: Speaker's affiliation
  img_link: string; // Image URL
  learn_more_link?: string; // Optional link to details/slides/recording
}

export interface OpportunityItem {
  id: string;
  title: string; // e.g., "Summer Research Intern", "Postdoctoral Fellow"
  type: "Internship" | "Project" | "Research Staff" | "Postdoc" | "Faculty"; // Category for filtering
  status: "Ongoing Interest" | "Closed" | "Currently Open" | "Completed"; // Indicate availability status
  description: string; // Brief description of the role/area
  details?: string; // Optional longer details or lists (can be used later)
  link?: string; // Link to details or contact info (use '#' or mailto: for now)
}

export interface ResearchListItem {
  id: string;
  title: string;
  vertical: string; // e.g., "Sustainability", "Worker Wellness", "Algorithms & ML", "Infrastructure"
  slug: string; // Path for the detail page, e.g., "digital-sustainable-supply-chain"
}
