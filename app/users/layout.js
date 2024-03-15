import React from "react";

async function UsersLayout({ children }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "force-cache", // SSG
    // cache: "no-store", // SSR
    next: {
      revalidate: 10,
    }, // ISR
  });
  const users = await res.json();

  return (
    <>
      <h1>Users Pages Breadcrumb</h1>
      <hr />
      Users:
      {
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      }
      <hr />
      {children}
    </>
  );
}

export default UsersLayout;
