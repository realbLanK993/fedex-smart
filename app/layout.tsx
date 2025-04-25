import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/navbar";
import { NavigationItem } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";
export const metadata: Metadata = {
  title: "FedEx Smart Center",
  description: "FedEx Smart Center in collaboration with IIT Madras",
};

const poppins = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const nav_list: NavigationItem[] = [
  {
    name: "About",
    icon: <ChevronDown size={16} />,
    href: "/about",
    subItems: [
      {
        name: "Overview",
        href: "/about/",
        color: "bg-red-300",
        description: "Learn more about our research center",
      },
      {
        name: "Team",
        href: "/team",
        color: "bg-purple-300",
        description: "Meet our expert research team",
      },
      {
        name: "Gallery",
        href: "/gallery",
        color: "bg-green-300",
        description: "View highlights of our work",
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
    name: "Get in Touch",
    icon: <ChevronDown size={16} />,
    href: "#",
    subItems: [
      {
        name: "Contact us",
        href: "/contact/",
        color: "bg-green-300",
        description: "Learn more about our research center",
      },
      {
        name: "Join Us",
        href: "/careers",
        color: "bg-yellow-300",
        description: "View highlights of our work",
      },
    ],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar list={nav_list} />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
