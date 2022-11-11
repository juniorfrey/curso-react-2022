import React, {createContext, useEffect, useState} from 'react';

import { tasks as Tareas } from "../data/apiTask";

export const TaskContext = createContext();
export const TaskContentProvider = (props) => {
    let newDate = new Date();
    let date = newDate.getDate();
    const [tasks, settasks] = useState([]);
    const createTask = (task) => {
      settasks([
        ...tasks,
        {
          title: task.title,
          id: Math.random(),
          descripcion: task.descripcion,
        },
      ]);
    };

    const deleteTask = (idTask) => {
      settasks(tasks.filter((task) => task.id !== idTask));
    };

     useEffect(() => {
       settasks(Tareas);
     }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask:deleteTask,
        createTask:createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};


