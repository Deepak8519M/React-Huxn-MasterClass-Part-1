import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";

function UpdateUser() {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handle = (e) => {
    e.preventDefault();

    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h1>Update User Name</h1>
      <form onSubmit={handle}>
        <input type="text" onChange={(e) => setNewName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
