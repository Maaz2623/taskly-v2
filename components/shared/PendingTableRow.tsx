"use client";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import TableCheckBox from "./TableCheckBox";
import { TaskProps } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PendingTableRow = ({ _id, title, priority, description }: TaskProps) => {




  return (
    <TableRow id={`table-row`}>
      <TableCell className="flex justify-start gap-2 text-gray-400 items-center">
        <TableCheckBox id={_id} type="pending" />
        <h3>Mark complete</h3>
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{priority}</TableCell>
      <TableCell>{description}</TableCell>
    </TableRow>
  );
};

export default PendingTableRow;
