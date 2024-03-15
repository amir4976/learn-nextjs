import { Suspense } from "react";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Users from "@/components/Users";
import Link from "next/link";
import './globals.css'
export default async function RootLayout({ children }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  // const firstUserName = users[0].name; // 10KB

  return (
    <html lang="en">
      <body>
        <div>
          <Link style={{ margin: "15px" }} href="/about">
            About
          </Link>
          <Link style={{ margin: "15px" }} href="/login">
            Login
          </Link>
          <Link style={{ margin: "15px" }} href="/my-account">
            My Account
          </Link>
        </div>
        <hr />
        <Header />
        <hr />
        {children}
        <hr />
        <h1>Footer Section</h1>
      </body>
    </html>
  );
}

{
  /* <RootLayout>
  <Suspense fallback={<Loading />}>
    <PageRoute></PageRoute>
  </Suspense>
</RootLayout>; */
}
