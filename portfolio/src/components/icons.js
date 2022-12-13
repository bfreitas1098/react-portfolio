import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
  return (
    <div className="icons flex">
      <a
        href="mailto:bfreitas1098@hotmail.com"
        target="_blank"
        rel="noreferrer"
        title="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://github.com/bfreitas1098"
        target="_blank"
        rel="noreferrer"
        title="Github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/barbara-freitas-28b941228"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default Icons;
