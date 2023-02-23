import React from "react";
import "../styles/toggleSwitch.scss";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <label className="switch">
      {theme === "light" ? (
        <BsSunFill className="switch-icon" color={"#9d4edd"} />
      ) : (
        <BsMoonFill className="switch-icon" color={"#9d4edd"} />
      )}
      <input
        type="checkbox"
        className="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <div className="slider"></div>
    </label>
  );
};

export default ToggleSwitch;
