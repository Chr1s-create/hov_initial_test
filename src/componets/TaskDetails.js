import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";

const TaskDetails = ({ task, setTasks, tasks }) => {
  const { taskName, isComplete, id } = task;

  const handleDelete = () => {
    const filtered = tasks.filter((task) => task.id !== id);

    setTasks(filtered);
  };

  const handleComplete = () => {
    const index = tasks.findIndex((task) => task.id === id);

    let updatedTasks = [...tasks];

    updatedTasks[index] = {
      ...updatedTasks[index],
      isComplete: !updatedTasks[index].isComplete,
    };

    setTasks(updatedTasks);
  };

  return (
    <div className="flex justify-between items-center w-full mb-5">
      <div
        onClick={handleComplete}
        className="flex justify-center items-center cursor-pointer"
      >
        {isComplete ? (
          <CheckCircleIcon style={{ color: "#61C397" }} />
        ) : (
          <RadioButtonUncheckedOutlinedIcon style={{ color: "#5F6673" }} />
        )}
        <p
          className={`ml-4 text-white text-lg ${isComplete && "line-through"}`}
        >
          {taskName}
        </p>
      </div>
      <button onClick={handleDelete} className="text-white mr-10">
        Delete
      </button>
    </div>
  );
};

export default TaskDetails;
