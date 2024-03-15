"use client";
import React, { useState } from "react";

function Header() {
  const [value, setValue] = useState(0);

  const action = () => setValue((prevValue) => prevValue + 1);

  return (
    <>
      <h1>Header Section</h1>
      <h2>{value}</h2>
      <button onClick={action}>Add To Value</button>
      <h1>Navbar Section</h1>
    </>
  );
}

export default Header;
