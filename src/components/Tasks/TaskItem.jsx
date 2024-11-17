import React from "react";
import Button from "../Common/Button";
import {  FiCheck, FiEdit, FiTrash2 } from "react-icons/fi";


const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onComplete(task.id)}
            className={`p-2 rounded-full hover:bg-gray-100 ${
              task.completed ? "text-green-500" : "text-gray-400"
            }`}
          >
            <FiCheck className="h-5 w-5" />
          </button>
          <span className={`${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(task.id)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
          >
            <FiEdit className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-full hover:bg-gray-100 text-red-500"
          >
            <FiTrash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
