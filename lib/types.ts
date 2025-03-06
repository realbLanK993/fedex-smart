import { LucideIcon } from "lucide-react";

export type NavigationItem = {
    name: string;
    icon?:JSX.Element;
    href: string;
    subItems?: NavigationItem[];
};