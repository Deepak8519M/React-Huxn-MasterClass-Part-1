import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState([]);
  console.log(items);

  const handle = () => {
    const a = document.getElementById("list").value;
    setItems((prevItems) => [...prevItems, a]);
  };
  return (
    <div>
      <h1>List of Items</h1>
      {items.map((item) => {
        return <li key={Math.random()}>{item}</li>;
      })}
      <label htmlFor="">Enter the list of Item</label>
      <input type="text" id="list" />
      <button onClick={handle}>Submit</button>
    </div>
  );
}

export default TodoList;
