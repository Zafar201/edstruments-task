import React from "react";
import TaskItem from "./TaskItem";

const TaskList = React.memo(({ tasks, onComplete, onDelete, onEdit }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
          No tasks found.please add the task
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
});

export default TaskList;
