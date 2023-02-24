import "../styles/landingPage.scss";
import React from "react";
import LandingPageNavbar from "./LandingPageNavbar";
import Intro from "./Intro";
import TechSpin from "./TechSpin";

const LandingPage = ({ toggleTheme, theme }) => {
  return (
    <main className="landing-page">
      <LandingPageNavbar toggleTheme={toggleTheme} theme={theme} />
      <section className="landing-page-hero section-padding">
        <Intro />
        <TechSpin />
      </section>
    </main>
  );
};

export default LandingPage;
