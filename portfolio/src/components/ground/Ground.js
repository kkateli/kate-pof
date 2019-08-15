import React, { Component } from "react";
import groundPic1 from "../../assets/images/ground.png";
import groundPic2 from "../../assets/images/ground.png";
import { TweenMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "./Ground.css";
class ground extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };
  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      triggerHook: 0, // show, when scrolled 10% into view
      duration: "5000",
      offset: -2100 // hide 10% before exiting view (80% + 10% from bottom)
    })
      // .setClassToggle("#reveal2", "visible2") // add class to reveal
      .setPin("#ground")
      .addIndicators({ name: "ground" }) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }

  render() {
    return (
      <div>
        <div class="spacer s2" />
        <div id="trigger3" class="spacer s0" />

        <div id="ground">
          <img id="ground1" src={groundPic1} alt="ground" />
          <img id="ground2" src={groundPic2} alt="ground" />
        </div>

        <div class="spacer s2" />
      </div>
    );
  }
}
export default ground;
