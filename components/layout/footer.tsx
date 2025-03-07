import { Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return (
      <footer className="flex justify-center items-center w-full">
        <div className="flex justify-between items-center defined-width gap-2 p-4 md:p-8 lg:p-12">
          <div className="flex gap-4 justify-center items-center">
            <Link
              href="#"
              className="lg:p-4 lg:border rounded-full hover:bg-secondary"
            >
              <Github size={16} />
            </Link>
            <Link
              href="#"
              className="lg:border lg:p-4 rounded-full hover:bg-secondary"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              href="#"
              className="lg:border lg:p-4 rounded-full hover:bg-secondary"
            >
              <Youtube size={16} />
            </Link>
          </div>
          <div className="md:flex flex-col lg:flex-row gap-2 hidden">
            <p className="text-xl font-bold text-gray-400">Logo</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 md:hidden">
              <p className="text-sm text-gray-400 w-full  text-right">Logo</p>
            </div>
            <p className="text-sm md:text-base text-gray-400">
              example@email.com
            </p>
          </div>
        </div>
      </footer>
    );
}