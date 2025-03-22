import { Faculty } from "@/lib/types";
import { Card } from "../ui/card";
import Image from "next/image";

export default function FacultyCard({
    designation,
    name,
    location
}:Faculty){
    return (
      <Card className="flex flex-row gap-4 min-w-[400px]">
        <div className="w-2/5 bg-secondary h-full rounded-l-lg flex justify-center items-center">PFP</div>
        <div className="flex flex-col gap-4 p-4">
          <span className="text-gray-400">
            {designation.toLocaleUpperCase()}
          </span>
          <p className="text-xl font-bold"> {name} </p>
          <div className="flex flex-col gap-2">
            <p> {location.department} </p>
            <p className="text-sm text-gray-400"> {location.institution} </p>
          </div>
        </div>
      </Card>
    );
}