import React, { useId } from "react";

function UniqId({ children }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />

      {children}
      <label htmlFor={`${id}-pw`}>Password</label>
      <input type="password" id={`${id}-pw`} />
    </div>
  );
}

export default UniqId;
