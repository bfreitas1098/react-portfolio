import React from "react";
import svg1 from "../styles/design1.svg";
import svg2 from "../styles/design2.svg";

import "../styles/designs.css";

const Designs = () => {
  return (
    <div className="designs">
      <img src={svg1} alt="design" id="design1" />
      <img src={svg2} alt="design" id="design2" />
    </div>
  );
};

export default Designs;
