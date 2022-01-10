import React, { useState } from "react";
import ReactSwitch from "react-switch";
import { BsCloudSunFill, BsCloudMoonFill } from "react-icons/bs";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Body from "./components/Body/Body";

function App() {
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    if (!checked) {
      setTheme("dark");
    } else if (checked) {
      setTheme("light");
    }
  };
  let myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
  };

  return (
    <div className="app" data-theme={theme}>
      <Navbar
        switch={
          <ReactSwitch
            onChange={handleChange}
            checked={checked}
            height={25}
            width={50}
            handleDiameter={30}
            onColor="#fff"
            offColor="#1d1f2f"
            offHandleColor="#fff"
            onHandleColor="#1d1f2f"
            uncheckedHandleIcon={
              <div style={myStyle}>
                <BsCloudSunFill />
              </div>
            }
            checkedHandleIcon={
              <div style={myStyle}>
                <BsCloudMoonFill color="#fff" />
              </div>
            }
            checkedIcon={false}
            uncheckedIcon={false}
          />
        }
      />
      <Body />
    </div>
  );
}

export default App;
