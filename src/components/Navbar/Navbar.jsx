import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav__container">
        <span>Skitch</span>
        <a href="mailto: dhruv@skitch.in">
          <button>Contact</button>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
