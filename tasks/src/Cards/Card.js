const Card = (props) => {
  //const Card = ({card}) => { // destructure
  console.log(props);
  return (
    <div>
      <h1>Cards: {props.card}</h1>
      <p>Nombre: {props.name}</p>
    </div>
  );
  //<h1>Cards: {card}</h1> // destructure
}

export const Title = ({data, nombre}) => {
     return (
       <div>
         <h1>
           Tarjeta: {data.name} - Monto: 💵{data.monto}
         </h1>
         <p>Cliente: {nombre}</p>
       </div>
     );
}

export default Card;