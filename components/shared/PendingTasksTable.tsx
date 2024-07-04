import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomTableRow from "./PendingTableRow";
import { getAllTasks } from "@/lib/actions/task.action";
import { TaskProps } from "@/types";
import PendingTableRow from "./PendingTableRow";
import EmptyTasks from "./EmptyTasks";

const PendingTasksTable = async () => {
  const pendingTasks = await getAllTasks();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Action</TableHead>
          <TableHead className="w-[350px]">Title</TableHead>
          <TableHead className="w-[350px]">Description</TableHead>
          <TableHead className="w-[100px]">Priority</TableHead>
          <TableHead className="w-[100px]">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pendingTasks.length === 0 ? (
          <EmptyTasks type="pending" />
        ) : (
          pendingTasks.map((task: TaskProps) => (
            <PendingTableRow
              key={task._id}
              _id={task._id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              isPending={task.isPending}
              isCompleted={task.isCompleted}
              isOutDated={task.isOutDated}
            />
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default PendingTasksTable;
