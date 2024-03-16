import React from "react";

function User({ params }) {
  return <h1>User Info - ID: {params.id}</h1>;
}



export async function genrateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users.map((user) => ({ params: { id: user.id } }));
}

export default User;
