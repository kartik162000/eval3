import React, { useEffect } from "react";
import "./Footer.css";
import ThemeColorBox from "../ThemeColorBox";
import makeRequest from "../../utils/makeRequest";
import { GET_ALL_THEMES } from "../../constants/apiEndPoints";

function Footer() {
  useEffect(() => {
    makeRequest(GET_ALL_THEMES).then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className="footer">
      <div className="foot">
        <div className="themeText">
          <h3>Theme</h3>
        </div>
        <div className="themeColor" />
        <ThemeColorBox />
      </div>
    </div>
  );
}

export default Footer;
