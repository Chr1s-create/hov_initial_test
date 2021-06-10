import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";

const Task = ({ task }) => {
  const { name, isComplete } = task;

  return (
    <div className=" flex justify-between items-center w-full">
      <div className="flex justify-center items-center mb-4 cursor-pointer">
        {isComplete ? (
          <CheckCircleIcon style={{ color: "#61C397" }} />
        ) : (
          <RadioButtonUncheckedOutlinedIcon style={{ color: "#5F6673" }} />
        )}
        <p
          className={`ml-4 text-white text-lg ${isComplete && "line-through"}`}
        >
          {name}
        </p>
      </div>
      <button className="text-white mr-10">Delete</button>
    </div>
  );
};

export default Task;
