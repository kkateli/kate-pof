import React, { Component } from "react";
import jump from "../../assets/images/fall.png";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

import "./JumpGirl.css";
class JumpGirl extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };
  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "500" // hide 10% before exiting view (80% + 10% from bottom)
    })
      .setClassToggle("#reveal1", "visible") // add class to reveal
      .setPin("#reveal1")
      .addIndicators() // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div>
        <div style={{ height: "500px", background: "orange" }}>
          <div class="spacer s2" />
          <div id="trigger1" class="spacer s0" />
          <div id="reveal1" class="box2 blue">
            <img src={jump} alt="jump girl" />
          </div>
          <div class="spacer s2" />
        </div>
      </div>
    );
  }
}
export default JumpGirl;
