import React, { useState } from "react";

function ExampleTwo() {
  const [randNumber, setRandNumber] = useState(() => {
    return Math.floor(Math.random() * 10);
  });

  const generate = () => {
    const newNumber = Math.floor(Math.random() * 10);
    setRandNumber(newNumber);
  };
  return (
    <div>
      <h1>Random Number : {randNumber}</h1>
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default ExampleTwo;
