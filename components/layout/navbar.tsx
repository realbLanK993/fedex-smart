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
import { Search } from "lucide-react";

export default function Navbar({list}:{list:NavigationItem[]}){
    return (
      <header className="p-4 md:p-8 lg:p-12 flex w-full justify-center items-center ">
        <nav className="flex justify-between gap-4 defined-width">
            <ul className="flex gap-16 defined-width items-center">
              <span className="font-bold text-xl">LOGO</span>
              <div className="flex gap-8">
                {list.map((item, index) => {
                  return (
                    <li key={index}>
                      {item.subItems ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex gap-1 justify-center items-center">
                            {item.name} {item.icon ? item.icon : ""}
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start">
                            {item.subItems.map((i, n) => (
                              <Link href={i.href} key={n}>
                                <DropdownMenuItem>{i.name}</DropdownMenuItem>
                              </Link>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link href={item.href}>{item.name}</Link>
                      )}
                    </li>
                  );
                })}
              </div>
            </ul>
            <Search size={18} />
        </nav>
      </header>
    );
}