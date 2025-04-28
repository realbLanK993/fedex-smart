import { Judge } from "@/lib/types";
import { Card } from "../ui/card";

export default function JudgeCard({ description, name, image }: Judge) {
  return (
    <Card className="flex flex-row gap-4 min-w-[400px]">
      {image && (
        <div className="w-[150px] bg-secondary h-full rounded-l-lg flex justify-center items-center">
          PFP
        </div>
      )}
      <div className="flex flex-col gap-4 p-4">
        <p className="text-xl font-bold"> {name} </p>
        <span className="text-muted-foreground text-sm">{description}</span>
      </div>
    </Card>
  );
}
