import React from "react";

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        className={`px-4 py-2 rounded-md ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          filter === "incomplete" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilters;
