import React, { useState } from "react";
import todo from "./assets/todo.png";
import InputBox from "./componets/InputBox";
import Task from "./componets/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Sample 1",
      isComplete: false,
    },
    {
      id: 2,
      name: "Sample 2",
      isComplete: true,
    },
    {
      id: 3,
      name: "Sample 3",
      isComplete: false,
    },
  ]);

  return (
    <div className="flex justify-center items-center bg-secondary min-h-screen w-full">
      <div className="flex flex-col rounded-xl shadow-lg justify-center items-center bg-primary h-auto w-auto p-7">
        <div className="flex items-center justify-start mb-5 w-full">
          <img className="h-14 w-14" src={todo} alt="todo" />
          <h1 className="text-white text-2xl font-semibold ml-6">
            React Todo list
          </h1>
        </div>

        <InputBox />

        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
