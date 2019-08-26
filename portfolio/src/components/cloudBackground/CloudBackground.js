import React, { Component } from "react";
import cloudBig from "../../assets/images/cloudBig.png";
import "./CloudBackground.css";
class CloudBackground extends Component {
  
  render() {
    return (
      <div>
        <div class="spacer s2" />
        <div id="trigger2" class="spacer s0" />
        <div id="pin2">
          <img className="cloudBackground" src={cloudBig} alt="cloud big" />
          <img className="cloudBackground" src={cloudBig} alt="cloud big" />
        </div>
        <div class="spacer s2" />
      </div>
    );
  }
}
export default CloudBackground;
