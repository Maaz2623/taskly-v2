import { deleteTask, getAllTasks } from "@/lib/actions/task.action";
import { CreateTaskProps, TaskProps } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import TableCheckBox from "./TableCheckBox";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CustomTableRow from "./PendingTableRow";
import PendingTasksTable from "./PendingTasksTable";
import CompletedTasksTable from "./CompletedTasksTable";

const TasksContainer = async () => {
  return (
    <>
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <PendingTasksTable />
        </TabsContent>
        <TabsContent value="completed">
          <CompletedTasksTable />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TasksContainer;
