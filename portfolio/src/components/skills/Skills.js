import React, { Component } from "react";
import Fe from "./fe/Fe";
import Be from "./be/Be";
import Uu from "./uu/Uu";
import Dm from "./dm/Dm";
import Ani from "./ani/Ani";
import { Container } from "react-bootstrap";
import "./skills.css";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
class Skills extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };

  componentDidMount() {
    var revealElements = document.getElementsByClassName("digit");
    console.log(revealElements);
    for (var i = 0; i < revealElements.length; i++) {
      // create a scene for each element
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 0, // start a little later
        triggerHook: 0.5,
        
      })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({ name: "digit " + (i + 1) }) // add indicators (requires plugin)
        .addTo(this.state.controller);
    }
  }
  render() {
    return (
      <div>
        <div class="spacer s2" />
        <div id="reveal-elements">
          <div className="digit">
            <Uu />
          </div>
          <div className="digit">
            <Fe />
          </div>
          <div className="digit">
            <Be />
          </div>
          <div className="digit">
            <Dm />
          </div>
          <div className="digit">
            <Ani />
          </div>
        </div>

        <div class="spacer s2" />
      </div>
    );
  }
}
export default Skills;
