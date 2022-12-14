import React from "react";
import svg1 from "../styles/design1.svg";
import svg2 from "../styles/design2.svg";

import styled from "styled-components";

const Designs = () => {
  return (
    <div className="designs">
      <Design src={svg1} alt="design" id="design1" />
      <Design src={svg2} alt="design" id="design2" />
    </div>
  );
};

export default Designs;

const Design = styled.img`
  position: absolute;
  z-index: -1;

  :nth-child(1) {
    top: 140rem;
    left: -6rem;
    height: 45rem;
  }

  :nth-child(2) {
    left: 71rem;
    top: 215rem;
    height: 40rem;
  }
`;
