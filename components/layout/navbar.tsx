import { NavigationItem } from "@/lib/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { ThemeToggle } from "../theme-provider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Card } from "../ui/card";

export default function Navbar({ list }: { list: NavigationItem[] }) {
  return (
    <header className="p-4 md:p-8 lg:p-12 flex w-full justify-center items-center ">
      <nav className="flex justify-between gap-4 defined-width">
        <ul className="flex gap-16 defined-width items-center">
          <div className="flex gap-2 justify-center items-center">
            <NavigationMenu className="md:hidden">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="">
                    <Menu />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="grid grid-cols-1 gap-4 min-w-[330px] max-w-[340px] w-full p-4">
                    <li>
                      <NavigationMenuLink href={"/about"}>
                        <div className="flex gap-2 h-full ">
                          <div className="h-full w-1 rounded-full bg-red-300" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">About</p>
                            <span className="text-gray-400 text-sm">
                              Learn more about our research center
                            </span>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href={"/research"}>
                        <div className="flex gap-2 h-full ">
                          <div className="h-full w-1 rounded-full bg-purple-300" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">Research</p>
                            <span className="text-gray-400 text-sm">
                              Explore our latest research findings.
                            </span>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href={"/events"}>
                        <div className="flex gap-2 h-full ">
                          <div className="h-full w-1 rounded-full bg-blue-300" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">Events</p>
                            <span className="text-gray-400 text-sm">
                              Check out upcoming research events.
                            </span>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink href={"/team"}>
                        <div className="flex gap-2 h-full ">
                          <div className="h-full w-1 rounded-full bg-orange-300" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">Team</p>
                            <span className="text-gray-400 text-sm">
                              Meet our expert research teams.
                            </span>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href={"/gallery"}>
                        <div className="flex gap-2 h-full hover:bg-secondary">
                          <div className="h-full w-1 rounded-full bg-yellow-300" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">Gallery</p>
                            <span className="text-gray-400 text-sm">
                              View highlights of our work.
                            </span>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href={"/careers"}>
                        <div className="flex gap-2 h-full ">
                          <div className="h-full w-1 rounded-full bg-foreground" />
                          <div className="flex flex-col gap-1">
                            <p className="font-bold">Careers</p>
                            <span className="text-gray-400 text-sm">
                              Join our research team today.
                            </span>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href={"/"}>
              <span className="font-bold text-xl">LOGO</span>
            </Link>
          </div>
          <div className="md:flex gap-2 hidden">
            {list.map((item, index) => {
              return (
                <NavigationMenu delayDuration={0} key={index}>
                  <NavigationMenuList>
                    {item.subItems ? (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="grid grid-cols-1 min-w-[330px] max-w-[340px] w-full">
                          {item.subItems.map((i, n) => (
                            <NavigationMenuLink href={i.href} key={n}>
                              <div className="flex gap-2 h-full  hover:bg-secondary p-4">
                                <div
                                  className={`h-full w-1 rounded-full ${i.color}`}
                                />
                                <div className="flex flex-col gap-1">
                                  <p className="font-bold text-sm">{i.name}</p>
                                  <span className="text-gray-400 text-sm">
                                    {i.description}
                                  </span>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                          href={item.href}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}
          </div>
        </ul>
        <div className="gap-4 flex justify-center items-center">
          <ThemeToggle />
          <Search size={18} />
        </div>
      </nav>
    </header>
  );
}
