import React from 'react'
import './task.css';

function Task({ready}) {

    //const cardStyle = { background: "#202020", color: "#fff", padding: "20px" }

  return (
    <div className={ `card ${ready ? ' card_realizada' : 'card_pendiente'}`}>
      <h1 style={{ fontSize: "20px" }}>Mi primer tarea</h1>
      <span>{ready ? "Tarea Realizada" : "Tarea Pendiente"}</span>
    </div>
  );
}

export default Task