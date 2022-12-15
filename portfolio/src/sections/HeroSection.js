import React from "react";
import Icons from "../components/icons";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <header className="flex">
        <Logo>BarbaraFreitas</Logo>
        <Navbar />
      </header>
      <div id="content" className="flex">
        <Wrapper>
          <Headings className="flex">
            <Subheading>Hello, I'm Barbara Freitas</Subheading>
            <Heading>
              Front-end Developer
              <br />
              User Interface & User
              <br />
              Experience Designer
            </Heading>
          </Headings>
          <CTA href="/" title="View Projects">
            View My Projects
          </CTA>
        </Wrapper>
        <Wrapper className="flex">
          <Portrait
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/057/429/original/portrait.png?1670616734"
            alt="portrait"
          />
          <ContactIcons className="flex">
            <Icons />
          </ContactIcons>
        </Wrapper>
      </div>
    </div>
  );
};

export default HeroSection;

const Logo = styled.div`
  font-family: "Lobster Two", cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 1.875rem;
  color: var(--secondary-color-neutral);
  margin: 3.125rem 0 0 var(--left-margin);
`;

const Wrapper = styled.div``;

const Headings = styled.div`
  color: var(--primary-color-light);
  margin: 9.375rem 0 7rem var(--left-margin);
  flex-direction: column;
`;

const Subheading = styled.span`
  font-size: 2rem;
  font-weight: 400;
  line-height: 125%;
`;

const Heading = styled.h1`
  margin-top: 5px;
  font-weight: 700;
  font-size: 3.313rem;
  line-height: 125%;
`;

const CTA = styled.a`
  padding: 0.94rem 1.44rem;
  color: var(--primary-color-dark);
  background-color: var(--secondary-color-dark);
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
  margin-left: var(--left-margin);
  transition: all var(--transition);

  :hover {
    background-color: var(--secondary-color-light);
  }
`;

const Portrait = styled.img`
  height: 36rem;
  margin: 7rem 0 0 6rem;
`;

const ContactIcons = styled.div`
  .icons {
    flex-direction: column;
    margin: 8.5rem 0 0 2.6rem;
    font-size: 2.19rem;

    a {
      color: #8097b9;
      margin-bottom: 1.25rem;
      transition: color ease-in-out 50ms;

      :hover {
        color: var(--primary-color-light);
      }
    }
  }
`;
