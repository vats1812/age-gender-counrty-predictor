import React from "react";
import { MdOnlinePrediction } from "react-icons/md";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav>
      <div className="nav_cont">
        <div className="nav_title">
          <MdOnlinePrediction size={"3rem"} color="#FFD43B" />
          <p>Predictor</p>
        </div>
        {props.switch}
      </div>
    </nav>
  );
}

export default Navbar;
