import React from "react";
import { useRef, useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearTimeout(intervalRef.current);
    };
  });

  return (
    <div>
      <h1>Timer : {count} sec</h1>
      <button onClick={() => clearTimeout(intervalRef.current)}>
        Stop Timer
      </button>
      <button
        onClick={() => {
          intervalRef.current = setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
          }, 1000);
        }}
      >
        Start
      </button>
    </div>
  );
}

export default Timer;
