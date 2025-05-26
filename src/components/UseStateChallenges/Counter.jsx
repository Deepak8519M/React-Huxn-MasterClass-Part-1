import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(() => {
    const localCount = localStorage.getItem("count");
    return localCount ? JSON.parse(localCount) : 1;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count)); // ✅ fixed key
  }, [count]);

  const handle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count Value : {count}</h1>
      <button onClick={handle}>Increment</button>
    </div>
  );
}

export default Counter;
