import React, {useState, useEffect} from "react";

 const Contador = () => {

 
    const [cont, setCont] = useState(0);
    const [user, setUser] = useState([]);

    const ingresar = () => {
        setUser({name:'pruebasss', password:'****************'});
        setCont(0);
        alert(user.name)
    }

    useEffect(() => {
      console.log("render");
    }, [cont]);

    return (
      <div>
        <h1>Contador: {cont}</h1>
        <button
          onClick={() => {
            setCont(cont + 1);
          }}
        >
          Sumar
        </button>

        <button
          onClick={() => {
            setCont(cont - 1);
          }}
        >
          Restar
        </button>

        <button onClick={ingresar}>Reiniciar</button>
      </div>
    );
}

export default Contador;;
