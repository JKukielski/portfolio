import React, { useEffect } from "react";
import "../styles/intro.scss";
import Typewriter from "typewriter-effect";
import Resume from "../assets/Jan_Kukielski_Tax_Specialist_Jan_2023_EN.pdf";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-autotype-container">
        <p className="intro-autotype-start">Hi! I'm </p>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [" Jan", " a JavaScript Developer"],
          }}
        />
      </div>
      <div className="intro-btn-container">
        <button className="intro-btn">
          <a className="intro-btn-link" href={Resume} download="Resume">
            Download My CV!
          </a>
        </button>
        <button className="intro-btn">
          <a className="intro-btn-link" href="#">
            Contact Me!
          </a>
        </button>
      </div>
    </section>
  );
};

export default Intro;
