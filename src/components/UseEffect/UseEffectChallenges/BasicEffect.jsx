import React, { useEffect } from "react";

function BasicEffect() {
  useEffect(() => {
    console.log("Hello this gets activated only in the first render");
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default BasicEffect;
