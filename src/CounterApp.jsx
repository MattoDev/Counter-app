import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (event) => {
    console.log(event);
    // console.log(newValue);
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };
  const handleSubtract = (event) => {
    console.log(event);
    // console.log(newValue);
    // setCounter(counter + 1);
    setCounter((c) => c - 1);
  };
  const handleReset = (event) => {
    console.log(event);
    // console.log(newValue);
    // setCounter(counter + 1);
    setCounter((c) => (c = value));
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
