import React, { useState } from "react";

function Profile() {
  const [info, setInfo] = useState({ name: "ajay", age: 14 });

  const handle = () => {
    const name2 = document.getElementById("text1").value;
    const age1 = document.getElementById("age").value;

    setInfo((prevName) => {
      return {
        name: name2,
        age: age1,
      };
    });
  };
  return (
    <div>
      <h1>Profile Info</h1>

      <h1>
        Name:{info.name}
        Age:{info.age}
      </h1>

      <label htmlFor="">Name</label>
      <input type="text" id="text1" />
      <label htmlFor="">Age</label>
      <input type="text" id="age" />
      <button onClick={handle}>Update</button>
    </div>
  );
}

export default Profile;
