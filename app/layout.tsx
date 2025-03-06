import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google"
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/navbar";
import { NavigationItem } from "@/lib/types";
import { ChevronDown } from "lucide-react";
export const metadata: Metadata = {
  title: "FedEx Smart Center",
  description: "FedEx Smart Center in collaboration with IIT Madras",
};

const poppins = Poppins({weight:['100','200','300','400','500','600','700','800','900'], subsets:['latin']})

const nav_list: NavigationItem[] = [
  {
    name: "About",
    icon: <ChevronDown size={16} />,
    href: "/about",
    subItems: [
      {
        name: "Overview",
        href: "/about/",
      },
      {
        name: "Team",
        href: "/about/team",
      },
      {
        name: "Gallery",
        href: "/about/gallery",
      },
    ],
  },
  {
    name: "Research",
    href: "/research",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Careers",
    href: "/careers",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex justify-center items-center flex-col`}
      >
        <Navbar list={nav_list} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
