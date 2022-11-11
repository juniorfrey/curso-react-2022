import  PropTypes  from "prop-types";

const Button = ({ text, nameDefault="Joe" }) => {
  return (
    <button onClick={() => { console.log('Hola mundo') }}>
      {text} - {nameDefault}
    </button>
  );
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
};



export default Button;