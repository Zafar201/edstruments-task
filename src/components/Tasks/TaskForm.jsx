import React, { useState, useEffect } from "react";
import Input from "../Common/Input";
import Button from "../Common/Button";
import {  FiPlus, FiEdit } from "react-icons/fi";

//component for editing and adding task
const TaskForm = ({ onSubmit, initialData = {}, mode = "add" }) => {
  const [title, setTitle] = useState(initialData.title || "");

  useEffect(() => {
    if (mode === "edit") setTitle(initialData.title || "");
  }, [initialData, mode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onSubmit({ ...initialData, title });
    setTitle("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="flex-1"
        />
        <Button disabled={title === ''} variant="add" type="submit">
          {mode === "edit" ? (
            <>
              <FiEdit className="mr-2" /> Edit
            </>
          ) : (
            <>
              <FiPlus className="mr-2" /> Add
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
