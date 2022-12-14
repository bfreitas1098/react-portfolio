import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Frames from "../components/frames";

import "../styles/portfoliosection.css";
import Designs from "../components/designs";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <h3>Portfolio</h3>
      <a href="/" id="resume" target="_blank" rel="noreferrer">
        <span>View Resume</span>
        <span id="icon">
          <FontAwesomeIcon icon={faFile} />
        </span>
      </a>
      <h4 id="web">Deployed Websites</h4>
      <Frames />
      <h4 id="figma">Figma Files</h4>
      <Frames />
      <Designs />
    </div>
  );
};

export default PortfolioSection;
