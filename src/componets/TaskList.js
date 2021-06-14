import React from "react";
import TaskDetails from "./TaskDetails";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="w-full flex flex-col">
      {tasks.map((task) => (
        <TaskDetails
          key={task.id}
          task={task}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
