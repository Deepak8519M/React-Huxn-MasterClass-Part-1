import React, { useState } from "react";

function Switcher() {
  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? <span>Dark Mode</span> : <span>Light Mode</span>}

      <br />
      <br />
      <br />

      <input type="text" key={sw ? "dark" : "light"} />
      {/* <button onClick={() => setSw(!sw)}>Switch</button> */}
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
}

export default Switcher;
