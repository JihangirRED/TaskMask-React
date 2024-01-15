import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  return (
    // <div>
    <div>
      <p>{state}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    //   <Counter state={state} increment={increment} decrement={decrement} />
    // </div>
  );
};
export default Counter;
