import './App.css';
import './task.css';

import  { Title } from "./Cards/Card";
import Button from './Button';
import Task from './Task';
import { Saludar } from './Saludar';
import Posts from './Posts';
import Ul from './LiComponent';
import Contador from './Contador';



function App() {

  const handleChange = (e) => {
    console.log(e.target.value)
  }


  return (
    <div className="App">
      <h1>HOLA MUNDO 😀</h1>
      <Title
        data={{ name: "Visa", monto: "900.000" }}
        nombre="Fredys Fernandez"
      />
      <br />
      <Title
        data={{ name: "Matercard", monto: "1.500.000" }}
        nombre="Junior Bolaño"
      />
      <br></br>
      <Button text="Transferir" nameDefault="Boton" />
      <Button text="Pagar" nameDefault />
      <input type="text" onChange={handleChange} />
      <br />
      <br />
      <Task ready={true} />
      <br />
      <br />
      <Saludar />
      <br />
      <br />
      <Posts />
      <br />
      <br />
      <Ul />
      <br />
      <br />
      <Contador />
    </div>
  );
}

export default App;
