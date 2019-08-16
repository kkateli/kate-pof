import React, { Component } from "react";
import stand from "../../assets/images/stand.png";
import "./StandGirl.css";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

class standGirl extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };

  componentDidMount() {
    new ScrollMagic.Scene({ triggerElement: "#trigger", offset:470 })
      // trigger a velocity opaticy animation
      .setVelocity("#animate", { opacity: 0 }, { duration: 400 })
      // .addIndicators({name:"standGirl"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div>
        <div class="spacer s2" />
        <div id="trigger" class="spacer s0" />
        <div id="animate" class="box1 blue">
          <div className="standGirlWrapper">
            <img id="standGirl" src={stand} alt="stand girl" />
          </div>
        </div>
        <div class="spacer s2" />
      </div>
    );
  }
}
export default standGirl;
