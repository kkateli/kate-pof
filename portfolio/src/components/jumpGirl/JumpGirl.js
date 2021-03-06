import React, { Component } from "react";
import jump from "../../assets/images/fall.png";
import cloud1 from "../../assets/images/cloud1.png";
import cloud2 from "../../assets/images/cloud2.png";
import cloud3 from "../../assets/images/cloud3.png";
import skills from "../../assets/images/SKILLS.png";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import Skills from "../skills/Skills";
import "./JumpGirl.css";

class JumpGirl extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };
  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: 0.5, // show, when scrolled 10% into view
      duration: "930" // hide 10% before exiting view (80% + 10% from bottom)
    })
      .setClassToggle("#reveal1", "visible") // add class to reveal
      // .setClassToggle("#reveal2", "visible2") // add class to reveal
      .setPin("#reveal1")
      // .addIndicators({name:"jumpGirl"}) // add indicators (requires plugin)
      .addTo(this.state.controller);

      new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.5, // show, when scrolled 10% into view
        duration: "1500",
        offset:-1345 // hide 10% before exiting view (80% + 10% from bottom)
      })
        
        .setClassToggle("#reveal2", "visible2") // add class to reveal
        // .addIndicators({name:"cloud"}) // add indicators (requires plugin)
        .addTo(this.state.controller);

    
  }
  render() {
    return (
      <div>
        <div style={{ height: "500px", background: "#7ec0ee" }}>
        <div class="spacer s2" />
          <div id="trigger1" class="spacer s0" />
          <div id="reveal1" class="box2 blue">
            <img src={jump} className="jumpGirl" alt="jump girl" />
          </div>

          <div class="spacer s2" />
          <div id="trigger2" class="spacer s0" />
          <div id="reveal2" class="spacer s0">
            <img className="skills" src={skills} alt="skills" />
            <div className="skillLabelWrapper">
            <div className="skillLabel beginner">Beginner</div>
            <div className="skillLabel elementary">Elementary</div>
            <div className="skillLabel intermediate">Intermediate</div>
            <div className="skillLabel advanced">Advanced</div>
            <div className="skillLabel expert">Expert</div>
            </div>
            <img className="cloudBig1" src={cloud1} alt="Cloud Big1" />
            <img className="cloudBig2" src={cloud2} alt="Cloud Big2" />
            <img className="cloudBig3" src={cloud3} alt="Cloud Big3" />
            <img className="cloudBig4" src={cloud1} alt="Cloud Big4" />
            <img className="cloudBig5" src={cloud2} alt="Cloud Big5" />
            
          </div>
          <Skills />
          
         
          
        </div>
      </div>
    );
  }
}
export default JumpGirl;
