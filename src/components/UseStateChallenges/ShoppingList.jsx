import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([
    { name: "TV", quantity: 7 },
    { name: "AC", quantity: 4 },
    { name: "TABLES", quantity: 2 },
  ]);

  const handle = () => {
    const item_name1 = document.getElementById("item_name").value;
    const item_qty1 = document.getElementById("item_qty").value;

    setItems((prevItems) => {
      return [...prevItems, { name: item_name1, quantity: item_qty1 }];
    });
  };
  return (
    <div>
      <h1>Items and their Quantities</h1>

      {items.map((item) => {
        return (
          <ul key={Math.random()}>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
          </ul>
        );
      })}

      <label htmlFor="">Item Name</label>
      <input type="text" name="" id="item_name" />

      <label htmlFor="">Item Qty</label>
      <input type="text" name="" id="item_qty" />

      <button onClick={handle}>Add Items</button>
    </div>
  );
}

export default ShoppingList;
