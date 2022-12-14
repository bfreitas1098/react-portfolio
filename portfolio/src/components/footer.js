import React from "react";
import Icons from "./icons";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer flex">
      <div id="footer-icons" className="flex">
        <Icons />
      </div>
      <span>© Barbara Freitas</span>
    </div>
  );
};

export default Footer;
