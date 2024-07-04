import React from "react";

const EmptyTasks = ({type}: {type: string}) => {
  return (
    <div className="w-full border-2 border-rose-500">
      {type === "pending" ? (
        <p>There are no pending tasks.</p>
      ) : (
        <p>There are no completed tasks.</p>
      )}
    </div>
  );
};

export default EmptyTasks;
