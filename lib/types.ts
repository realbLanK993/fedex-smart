import { peopleData } from "./peopleData";

export type Faculty = {
  image?: string;
  designation: string;
  name: string;
  department?: string;
  institution?: string;
};

export type Judge = {
  image?: string;
  name: string;
  description?: string;
};
export type Speaker = {
  image?: string;
  designation: string;
  name: string;
  location: {
    department?: string;
    institution?: string;
  };
};

export type Researcher = {
  image?: string;
  name: string;
  description?: string;
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
  faculty?: Person[];
  judges?: Judge[];
  speakers?: Speaker[];
  researchers?: Researcher[];
};

export interface GalleryImage {
  id: number;
  src: string; // Path to your image (can be local in /public or external URL)
  alt: string; // Alt text for the image
  description: string; // Description shown in the lightbox
  width: number; // Original image width (for next/image)
  height: number; // Original image height (for next/image)
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
  slug?: string; // Optional link to details/slides/recording
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

export type TeamCategory = "Faculty" | "Advisory" | "Center" | "Research";

export interface TeamMember {
  id: number | string; // Unique identifier
  category: TeamCategory; // New field for the tab category
  imageUrl?: string; // Leave blank or use '/placeholder.webp' for now
  name: string;
  title: string; // Can combine role and department or affiliation
  profileLink?: string; // The link from your website content
}

export interface VerticalData {
  id: string;
  icon: React.ReactNode;
  imageUrl: string;
  title: string;
  description: string;
  link?: string; // Link to the main research page section or filtered view
}

// src/lib/types.ts (or where you keep types)
export interface Person {
  id: string; // Unique identifier (e.g., 'arshinder-kaur')
  name: string;
  designation: string;
  institution: string;
  department?: string; // Optional
  imageUrl?: string;
  profileLink?: string;
}
export interface TeamMemberRef {
  id: number | string; // Unique ID for this specific role/listing
  personId: keyof typeof peopleData; // Reference to the key in peopleData
  category: TeamCategory;
  // Optional title override if different from primary designation
  // or to add role context (e.g., PI/Co-PI)
  roleTitle?: string;
}
