import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Frames from "../components/frames";

import styled from "styled-components";
import Designs from "../components/designs";

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <Title>Portfolio</Title>
      <Resume href="/" target="_blank" rel="noreferrer">
        <span>View Resume</span>
        <span id="icon">
          <FontAwesomeIcon icon={faFile} />
        </span>
      </Resume>
      <Subtitle className="web">Deployed Websites</Subtitle>
      <Frames />
      <Subtitle className="figma">Figma Files</Subtitle>
      <Frames />
      <Designs />
    </div>
  );
};

export default PortfolioSection;

const Title = styled.h3`
  margin: 10rem 0 0 var(--left-margin);
`;

const Resume = styled.a`
  position: absolute;
  top: 153.8rem;
  left: 67rem;
  text-decoration: none;

  span {
    font-weight: 600;
    font-size: 1.56rem;
    margin-right: 0.8rem;
    color: var(--secondary-color-dark);

    #icon {
      font-size: 1.5rem;
      color: var(--secondary-color-dark);
    }
  }
`;

const Subtitle = styled.h4`
  color: var(--primary-color-light);
  font-size: 1.3rem;
  font-weight: 400;

  .web {
    margin: 6.25rem 0 0 var(--left-margin);
  }

  .figma {
    margin: 9.375rem 0 0 var(--left-margin);
  }
`;
