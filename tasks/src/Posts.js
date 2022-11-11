import { GoCreditCard, GoFileSymlinkDirectory } from "react-icons/go";

function Posts() {
  //https://jsonplaceholder.typicode.com/posts
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      }}
    >
      <GoCreditCard />
      Traer datos 
      <GoFileSymlinkDirectory />
    </button>
  );
}

export default Posts;
