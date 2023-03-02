/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./ThemeColorBox.css";

function ThemeColorBox(props) {
  return (
    <div
      className="themeColorBox"
      style={{
        backgroundColor: props.colorHexCode,
        border: `1 px solid ${props.colorHexCode}`,
      }}
      onClick={props.onClick}
    />
  );
}

export default ThemeColorBox;
