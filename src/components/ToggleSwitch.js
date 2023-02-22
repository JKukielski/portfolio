import React from "react";
import "../styles/toggleSwitch.scss";
const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <label className="switch">
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
