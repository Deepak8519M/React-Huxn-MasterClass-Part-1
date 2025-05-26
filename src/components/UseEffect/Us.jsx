import React from "react";
import { useState, useEffect } from "react";

function Us() {
  const [value, setvalue] = useState(0);
  const [first, setfirst] = useState(0);
  const [newValue, setNewValue] = useState(0);

  useEffect(() => {
    console.log("Hello");
    setfirst(first + 1);
    document.title = `Increment ${first}`;
  }, [value, newValue]);
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setvalue(value + 1)}>Click Me</button>

      <br />
      <br />
      <h2>{newValue}</h2>
      <button onClick={() => setNewValue(newValue + 1)}>Click Me</button>
    </div>
  );
}

export default Us;
