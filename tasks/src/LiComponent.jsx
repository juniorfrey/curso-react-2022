import './task.css'

const LiComponent = () => {
  const users = [
    {
      id: 1,
      name: "dad",
      image: "https://robohash.org/users2",
    },
    {
      id: 2,
      name: "Joe",
      image: "https://robohash.org/user1",
    },
  ];
  
  return users.map((item, i) => <li className="li-style" key={i}>{item.name} - {item.id} -  <Img img={item.image} url={item.image} /> </li>);
 
}

const Img = ({img, url}) => {
    return <img className="img-estilos" src={img} title={url} alt={url} />;
};

const Ul = () => {
    return <ul className="ul">
        <LiComponent/>
    </ul>;
}

export default Ul;