import React, { Component } from "react";
import stand from "../../assets/images/stand.png";
import "./StandGirl.css";

class standGirl extends Component {
  render() {
    return (
      <div>
        <div className="standGirlWrapper">
          <img id="standGirl" src={stand} alt="stand girl" />
        </div>
      </div>
    );
  }
}
export default standGirl;
