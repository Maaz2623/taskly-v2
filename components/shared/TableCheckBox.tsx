"use client";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { markComplete, markIncomplete } from "@/lib/actions/task.action";
import { useToast } from "../ui/use-toast";

const TableCheckBox = ({ id, type }: { id: string; type: string }) => {
  const { toast } = useToast();

  return (
    <Checkbox
      onClick={() =>
        toast({
          title: "Congratulations!",
          description: "Task completed",
        })
      }
      onCheckedChange={() => {
        if (type === "pending") {
          markComplete(id);
        } else {
          markIncomplete(id);
        }
      }}
    />
  );
};

export default TableCheckBox;
