import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchTasks, saveTasks, deleteTask, toggleTaskComplete, addOrUpdateTask } from "../utils/taskUtils";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  // fetch tasks for the loggedin user
  useEffect(() => {
    if (user) {
      const storedTasks = fetchTasks(user.username);
      setTasks(storedTasks);
    }
  }, [user]);

  // save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (user && tasks.length > 0) {
      saveTasks(user.username, tasks);
    }
  }, [tasks, user]);

  // Task add and update 
  const addTask = (task) => {
    const updatedTasks = addOrUpdateTask(tasks, task, user.username);
    setTasks(updatedTasks);
  };


  //delete task
  const deleteTaskById = (taskId) => {
    const updatedTasks = deleteTask(tasks, taskId, user.username);
    setTasks(updatedTasks);
  };


  //task comepletion
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = toggleTaskComplete(tasks, taskId);
    setTasks(updatedTasks);
  };


  const updateTask = (task) => {
    addTask(task); 
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask: deleteTaskById,
        toggleTaskCompletion,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
