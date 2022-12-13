import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="flex">
          <li>
            <a href="/" title="About Me">
              About
            </a>
          </li>
          <li>
            <a href="/" title="Projects">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/" title="Contact Me">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
