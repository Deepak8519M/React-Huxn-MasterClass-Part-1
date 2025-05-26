import React, { useContext } from "react";

import { Data } from "../../App";
import { Data1 } from "../../App";

function Comp3() {
  const userName = useContext(Data);
  const userAge = useContext(Data1);

  return (
    <h1>
      My name is {userName} and my age is {userAge}
    </h1>
  );
}

export default Comp3;
