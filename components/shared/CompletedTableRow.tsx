"use client";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import TableCheckBox from "./TableCheckBox";
import { TaskProps } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CompletedTableRow = ({
  _id,
  title,
  priority,
  description,
}: TaskProps) => {
  return (
    <TableRow id={`table-row`}>
      <TableCell className="flex justify-start gap-2 text-gray-400 items-center">
        <TableCheckBox type="completed" id={_id} />
        <h3>Mark incomplete</h3>
      </TableCell>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell>{priority}</TableCell>
      <TableCell>{description}</TableCell>
    </TableRow>
  );
};

export default CompletedTableRow;
