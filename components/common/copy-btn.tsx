"use client";

import { copyText } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function CopyBtn({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      onClick={() => {
        copyText(text);
        toast.success("Link copied to clipboard", {
          description: text,
        });
      }}
      variant={"outline"}
      className="flex gap-4 justify-center items-center rounded-full"
    >
      {" "}
      {children}
    </Button>
  );
}
