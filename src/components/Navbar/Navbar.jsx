import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav__container">
        <span>Skitch</span>
        <a href="mailto:connect@skitch.in">
          <button>Contact us</button>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
