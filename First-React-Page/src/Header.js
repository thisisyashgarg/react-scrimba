import React from "react";
import reactLogo from "./public/img/react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} className="logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
