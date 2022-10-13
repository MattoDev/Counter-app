import PropTypes from "prop-types";

const handleAdd = (event) => {
  console.log(event);
  // console.log(newValue);
};
export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={(event) => handleAdd(event, "Hola")}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
