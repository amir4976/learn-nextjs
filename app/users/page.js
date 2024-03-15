"use client";
import React, { useState } from "react";

function Users() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount((prevCount) => setCount(prevCount + 1));
  };

  const minusCounter = () => {
    setCount((prevCount) => setCount(prevCount - 1));
  };

  console.log("Users List Page"); // By Default Server Component (SSR)
  return (
    <>
      <h1>Users List Page</h1>
      <h2>{count}</h2>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={minusCounter}>Minus Counter</button>
    </>
  );
}

export default Users;
