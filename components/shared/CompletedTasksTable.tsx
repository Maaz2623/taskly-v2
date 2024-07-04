import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllTasks, getCompletedTasks } from "@/lib/actions/task.action";
import { TaskProps } from "@/types";
import CompletedTableRow from "./CompletedTableRow";
import EmptyTasks from "./EmptyTasks";

const CompletedTasksTable = async () => {
  const completedTasks = await getCompletedTasks();

  return (
    <>
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
          {completedTasks.length === 0 ? (
            <EmptyTasks type="completed" />
          ) : (
            completedTasks.map((task: TaskProps) => (
              <CompletedTableRow
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
    </>
  );
};

export default CompletedTasksTable;
