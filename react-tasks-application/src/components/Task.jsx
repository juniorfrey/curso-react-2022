import Card from "./Card";
import { TaskContext } from "../content/TaskContent";
import { useContext } from "react";

const Task = () => {
  
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-3xl font-bold font-mono text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 text-left">
      {tasks.map((task) => (
        <Card task={task} key={task.id} /* deleteTask={deleteTask} */ />
      ))}
    </div>
  );
};

export default Task
