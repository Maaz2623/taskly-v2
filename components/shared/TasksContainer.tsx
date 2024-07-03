import { deleteTask, getAllTasks } from "@/lib/actions/task.action";
import { CreateTaskProps, TaskProps } from "@/types";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import TableCheckBox from "./TableCheckBox";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CustomTableRow from "./TableRow";

const TasksContainer = async () => {
  const tasks = await getAllTasks();

  return (
    <Table className="w-1/2">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Action</TableHead>
          <TableHead className="w-[300px]">Title</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task: TaskProps) => {
          return (
            <CustomTableRow
              _id={task._id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              isOutDated={task.isOutDated}
              isPending={task.isPending}
              isCompleted={task.isCompleted}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TasksContainer;
