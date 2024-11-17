import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/Tasks/TaskForm";
import TaskFilters from "../components/Tasks/TaskFilter";
import TaskList from "../components/Tasks/TaskList";
import { useAuth } from "../context/AuthContext";
import { useTask } from "../context/TaskContext";
import Button from "../components/Common/Button";
import { FiLogOut } from "react-icons/fi";

const TaskManager = () => {
  const { logout } = useAuth();
  const { tasks, addTask, deleteTask, toggleTaskCompletion, updateTask } =
    useTask();
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "all") return true;
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  // Logout function
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {loggedInUser.username}
            </span>
            <Button
              variant="logout"
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <FiLogOut className="mr-2" /> Logout
            </Button>
          </div>
        </div>
      </div>

    {/* editing and adding task input */}
      <TaskForm
        onSubmit={(task) => {
          if (editingTask) updateTask(task);
          else addTask(task);
          setEditingTask(null);
        }}
        initialData={editingTask || {}}
        mode={editingTask ? "edit" : "add"}
      />

      <TaskFilters filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        onComplete={toggleTaskCompletion}
        onDelete={deleteTask}
        onEdit={(taskId) => {
          const taskToEdit = tasks.find((task) => task.id === taskId);
          setEditingTask(taskToEdit);
        }}
      />
    </div>
  );
};

export default TaskManager;
