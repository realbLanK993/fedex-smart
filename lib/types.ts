import { LucideIcon } from "lucide-react";


export type Faculty = {
  image?:string,
  designation: string;
  name: string;
  location: {
    department?: string;
    institution?: string;
  };
};
export type NavigationItem = {
    name: string;
    icon?:JSX.Element;
    href: string;
    color?: string;
    description?:string;
    subItems?: NavigationItem[];
};

export type CommonPageProps = {
  type: "Research" | "Blog" | "Events";
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