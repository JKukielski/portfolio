import React from "react";
import "../styles/logo.scss";
import { RiStackLine } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="logo">
      <RiStackLine className="logo-image" />
      <div className="logo-text-container">
        <h1 className="logo-name">Jan Kukielski</h1>
        <p className="logo-title">Full-Stack Dev</p>
      </div>
    </div>
  );
};

export default Logo;
