import React from "react";
import AddIcon from "@material-ui/icons/Add";

const InputBox = () => {
  return (
    <div className="h-full w-full flex justify-center items-center mb-5">
      <div className="flex justify-center items-center">
        <AddIcon style={{ fontSize: 16 }} className="text-grayish mr-1" />
        <form action=""></form>
        <input
          type="text"
          className="w-80 p-2 bg-primary text-grayish outline-none border-none text-lg font-semibold"
          placeholder="Add a new task"
        />
        <button className="bg-secondary text-white py-1 px-3 rounded text-lg hover:opacity-60 active:outline-none">
          Add
        </button>
      </div>
    </div>
  );
};

export default InputBox;
