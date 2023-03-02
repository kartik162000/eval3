/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import "./Footer.css";
import ThemeColorBox from "../ThemeColorBox";

import { ThemeContext } from "../../context/Themes";
import { returnThemeColor } from "../../utils/common";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_THEME_DATA } from "../../constants/apiEndPoints";

function Footer() {
  const { themeData, setAllThemeData } = useContext(ThemeContext);
  const [preferredThemeId, setPreferredThemeId] = React.useState(
    themeData.preferredThemeId
  );
  const handleSaveTheme = async () => {
    await makeRequest(UPDATE_THEME_DATA, {
      data: { preferredThemeId },
    });
  };

  const handleTheme = (id) => {
    const newThemeData = { ...themeData, preferredThemeId: id };
    setAllThemeData(newThemeData);
    setPreferredThemeId(id);
  };

  return (
    <div
      className="footer"
      style={{ backgroundColor: returnThemeColor(themeData) }}
    >
      <div className="foot">
        <div className="themeText">
          <h3>Theme</h3>
        </div>
        <div className="themeColor">
          {/* {console.log(themeData)} */}
          {themeData &&
            themeData.themes.map((th) => (
              <ThemeColorBox
                colorHexCode={th.colorHexCode}
                id={th.id}
                onClick={() => handleTheme(th.id)}
              />
            ))}
        </div>
        <div className="" onClick={handleSaveTheme}>
          Save Changes
        </div>
      </div>
    </div>
  );
}

export default Footer;
