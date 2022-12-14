import React from "react";
import Icons from "../components/icons";
import Navbar from "../components/Navbar";
import "../styles/herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <header className="flex">
        <div id="logo">BarbaraFreitas</div>
        <Navbar />
      </header>
      <div id="content" className="flex">
        <div className="wrapper">
          <div id="headings" className="flex">
            <span>Hello, I'm Barbara Freitas</span>
            <h1>
              Front-end Developer
              <br />
              User Interface & User
              <br />
              Experience Designer
            </h1>
          </div>
          <a href="/" id="CTA" title="View Projects">
            View My Projects
          </a>
        </div>
        <div className="flex">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/057/429/original/portrait.png?1670616734"
            alt="portrait"
          />
          <div id="hero-icons" className="flex">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
