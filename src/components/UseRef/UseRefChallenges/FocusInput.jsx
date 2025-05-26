import React from "react";
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handle = () => {
    inputRef.current.focus();
    inputRef.current.value = "Sharma";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => handle()}> Focus and Add Text </button>
    </div>
  );
}

export default FocusInput;
