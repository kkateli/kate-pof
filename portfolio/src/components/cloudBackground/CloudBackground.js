import React, { Component } from "react";
import cloudBig from "../../assets/images/cloudBig.png";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "./CloudBackground.css";
class CloudBackground extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };
  componentDidMount() {
    new ScrollMagic.Scene({ triggerElement: "#pin2" , triggerHook:0.65})
      .setPin("#pin2")
    //   .addIndicators({ name: "2 (duration: 0)" }) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div>
        <div class="spacer s2" />
        <div id="trigger2" class="spacer s0" />
        <div id="pin2">
          <img className="cloudBackground1" src={cloudBig} alt="cloud big" />
          <img className="cloudBackground2" src={cloudBig} alt="cloud big" />
        </div>
        <div class="spacer s2" />
      </div>
    );
  }
}
export default CloudBackground;
