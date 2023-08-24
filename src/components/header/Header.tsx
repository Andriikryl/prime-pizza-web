import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/cart"}>cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
