import { useState, useContext } from "react"
import { TaskContext } from "../content/TaskContent";


const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
 
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({title, descripcion});
    setTitle('');
    setDescripcion('');
  };

  

  return (
    <div className="max-w-md mx-auto rounded-md bg-slate-600">
      <form onSubmit={handleSubmit} className="p-10 mb-4 text-center font-sans">
        <h1 className="text-2xl font-bold text-white mb-3">
          Crea una tarea nueva
        </h1>
        <input
          type="text"
          placeholder="Escribe tareas"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />
        <textarea
          placeholder="Escriba una descripcion"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        ></textarea>
        
        <button className="bg-green-400 text-white rounded-md p-3 w-full">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TaskForm
