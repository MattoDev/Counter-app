//La proptypes sirven para definir el tipo a las propertys
import PropTypes from "prop-types";

const newMessage = {
  message: "Hola mundo",
  title: "El Mateo",
};

export function FirstApp({ title, subTitle, name }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Mateo Fonseca",
};
