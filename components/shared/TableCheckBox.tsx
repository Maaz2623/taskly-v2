"use client";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { deleteTask } from "@/lib/actions/task.action";
import { useToast } from "../ui/use-toast";

const TableCheckBox = ({ id }: { id: string }) => {

  const { toast } = useToast();

  return (
    <Checkbox
      onClick={() =>
        toast({
          title: "Congratulations!",
          description: "Task completed",
        })
      }
      onCheckedChange={() => deleteTask(id)}
    />
  );
};

export default TableCheckBox;
