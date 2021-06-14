import React, { useState } from "react";
import todo from "./assets/todo.png";
import TaskForm from "./componets/TaskForm";
import TaskList from "./componets/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center bg-secondary min-h-screen w-full">
      <div className="flex flex-col rounded-xl shadow-lg justify-center items-center bg-primary h-auto w-auto p-7">
        <div className="flex items-center justify-start mb-5 w-full">
          <img className="h-14 w-14" src={todo} alt="todo" />
          <h1 className="text-white text-2xl font-semibold ml-6">
            React Todo list
          </h1>
        </div>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
