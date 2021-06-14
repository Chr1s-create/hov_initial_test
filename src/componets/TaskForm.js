import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";

const TaskForm = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please enter task name");
    } else {
      setTasks([
        ...tasks,
        { taskName: input, isComplete: false, id: uuidv4() },
      ]);
    }

    setInput("");
  };

  return (
    <div className="h-full w-full flex justify-center items-center mb-5">
      <div className="flex justify-center items-center">
        <AddIcon style={{ fontSize: 16 }} className="text-grayish mr-1" />
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleChange}
            type="text"
            className="w-80 p-2 bg-primary text-grayish outline-none border-none text-lg font-semibold"
            placeholder="Add a new task"
          />
        </form>
        <button
          onClick={handleSubmit}
          className="bg-secondary text-white py-1 px-3 rounded text-lg hover:opacity-60 active:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
