import React, { Component } from "react";
import bee from "../../assets/images/bee.png";
import "./Project1.css";
import house1 from "../../assets/images/house1.png";

import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
class project1 extends Component {
  state = {
    controller: new ScrollMagic.Controller({vertical: false})
  };

  componentDidMount() {
    new ScrollMagic.Scene({ triggerElement: "#bulb1", offset:250})
      .setClassToggle("#light1", "active") // add class toggle
      // .addIndicators({name:"bulb"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
      new ScrollMagic.Scene({ triggerElement: "#bulb2", offset:250 })
      .setClassToggle("#light2", "active") // add class toggle
      // .addIndicators({name:"bulb"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
      new ScrollMagic.Scene({ triggerElement: "#bulb3", offset:250})
      .setClassToggle("#light3", "active") // add class toggle
      // .addIndicators({name:"bulb"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
      new ScrollMagic.Scene({ triggerElement: "#bulb4", offset:250 })
      .setClassToggle("#light4", "active") // add class toggle
      // .addIndicators({name:"bulb"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
      new ScrollMagic.Scene({ triggerElement: "#bulb5", offset:250 })
      .setClassToggle("#light5", "active") // add class toggle
      // .addIndicators({name:"bulb"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div className="project1">
        <img src={house1} alt="house1" className="house1" />
        <div id="base1" />
        <img src={bee} alt="bee" id="bee1" />
        <div id="bulb1">
          <div id="light1" />
          <div className="bulbBase" />
        </div>
        <div id="bulb2">
          <div id="light2" />
          <div className="bulbBase" />
        </div>
        <div id="bulb3">
          <div id="light3" />
          <div className="bulbBase" />
        </div>
        <div id="bulb4">
          <div id="light4" />
          <div className="bulbBase" />
        </div>
        <div id="bulb5">
          <div id="light5" />
          <div className="bulbBase" />
        </div>

        <div id="base2" />
      </div>
    );
  }
}
export default project1;
