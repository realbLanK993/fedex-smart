import { Faculty } from "@/lib/types";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export default function FacultyCard({
  designation,
  name,
  location,
  image,
}: Faculty) {
  return (
    <Card className="flex flex-row gap-4 min-w-[250px] w-full">
      {image && (
        <div className="w-[150px] bg-secondary h-full rounded-l-lg flex justify-center items-center">
          PFP
        </div>
      )}
      <div className="flex flex-col gap-4 p-4">
        <Badge className="w-fit text-xs">
          {designation.toLocaleUpperCase()}
        </Badge>
        <p className="text-xl font-bold"> {name} </p>
        <div className="flex flex-col gap-2">
          <p> {location.department} </p>
          <p className="text-sm text-gray-400"> {location.institution} </p>
        </div>
      </div>
    </Card>
  );
}
