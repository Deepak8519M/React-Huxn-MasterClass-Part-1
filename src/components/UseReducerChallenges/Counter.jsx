import React, { useReducer, useState } from "react";
import reducer from "./counterReducer";

const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputNo, setInputNo] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>

      <br />
      <br />

      <h1>{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <input
        type="number"
        value={inputNo}
        onChange={(e) => setInputNo(Number(e.target.value))}
      />
      <button
        onClick={() => dispatch({ type: "incrementByNo", payload: inputNo })}
      >
        IncrementbyNO
      </button>
      <button
        onClick={() => dispatch({ type: "decrementByNo", payload: inputNo })}
      >
        DecrementbyNO
      </button>
      <br />
      <br />
    </div>
  );
}

export default Counter;
