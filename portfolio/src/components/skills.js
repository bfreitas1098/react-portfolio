import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "../styles/skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="flex div1">
        <span className="icon">
          <FontAwesomeIcon icon={faHtml5} />
        </span>
        <span className="subtitle">HTML</span>
      </div>
      <div className="flex div2">
        <span className="icon">
          <FontAwesomeIcon icon={faCss3} />
        </span>
        <span className="subtitle">CSS/Sass</span>
      </div>
      <div className="flex div3">
        <span className="icon">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>
        <span className="subtitle">JavaScript 6</span>
      </div>
      <div className="flex div4">
        <span className="icon">
          <FontAwesomeIcon icon={faFigma} />
        </span>
        <span className="subtitle">Figma</span>
      </div>
      <div className="flex div5">
        <span className="icon">
          <FontAwesomeIcon icon={faReact} />
        </span>
        <span className="subtitle">React</span>
      </div>
      <div className="flex div6">
        <span className="icon">
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <span className="subtitle">APIs</span>
      </div>
    </div>
  );
};

export default Skills;
