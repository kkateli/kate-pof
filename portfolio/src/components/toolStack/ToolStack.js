import React, { Component } from "react";
import { TimelineMax } from "gsap/TimelineMax";
import { TweenMax } from "gsap/TweenMax";
import ScrollMagic from "ScrollMagic";
import { Linear } from "gsap/EasePack";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "./ToolStack.css";
import wp from "../../assets/images/toolImg/wp.png";
import babel from "../../assets/images/toolImg/babel.png";
import npm from "../../assets/images/toolImg/npm.png";
import rest from "../../assets/images/toolImg/rest.png";
import linux from "../../assets/images/toolImg/linux.png";
import aws from "../../assets/images/toolImg/aws.png";
import azure from "../../assets/images/toolImg/azure.png";
import json from "../../assets/images/toolImg/json.png";
import xml from "../../assets/images/toolImg/xml.png";
import ga from "../../assets/images/toolImg/ga.png";
import gsc from "../../assets/images/toolImg/gsc.png";
import wordpress from "../../assets/images/toolImg/wordpress.png";
import tools from "../../assets/images/TOOLS.png";
import star from "../../assets/images/star.png";
import cloud1 from "../../assets/images/darkCloud1.png";
import cloud2 from "../../assets/images/darkCloud2.png";

class ToolStack extends Component {
  state = {
    //NOTE
    controller: new ScrollMagic.Controller({ vertical: false })
  };

  componentDidMount() {
    var revealElements = document.getElementsByClassName("serie");
    for (var i = 0; i < revealElements.length; i++) {
      // create a scene for each element
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: -50 // start a little later
      })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        // .addIndicators({name: "serie " + (i+1) }) // add indicators (requires plugin)
        .addTo(this.state.controller);
    }
    //star set1 move
    var tween = new TimelineMax().add([
      TweenMax.fromTo(
        ".starSet1 #star1",
        1,
        { left: 800 },
        { left: 400, ease: Linear.easeNone }
      ),
      TweenMax.fromTo(
        ".starSet1 #star2",
        1,
        { left: 850 },
        { left: 400, ease: Linear.easeNone }
      ),
      TweenMax.fromTo(
        ".starSet1 #star3",
        1,
        { left: 1000 },
        { left: 400, ease: Linear.easeNone }
      ),
      TweenMax.fromTo(
        ".starSet1 #star4",
        1,
        { left: 1600 },
        { left: 400, ease: Linear.easeNone }
      ),
      TweenMax.fromTo(
        ".starSet1 #star5",
        1,
        { left: 1900 },
        { left: 400, ease: Linear.easeNone }
      )
    ]);

    new ScrollMagic.Scene({ triggerElement: ".starSet1", offset: 1000, duration:500 })
      .setTween(tween)
      // .addIndicators({name:"starSet1"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
    //star set2 move
    var tween2 = new TimelineMax().add([
      TweenMax.fromTo(
        ".starSet2 #star4",
        1,
        { left: 1600 },
        { left: 2500, ease: Linear.easeNone }
      ),
      TweenMax.fromTo(
        ".starSet2 #star5",
        1,
        { left: 1900 },
        { left: 2500, ease: Linear.easeNone }
      )
    ]);

    new ScrollMagic.Scene({ triggerElement: ".starSet2", offset: 1700,duration:500  })
      .setTween(tween2)
      // .addIndicators({name:"starSet2"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div className="brickStack">
         
        <img src={tools} alt="tools" className="tools" />
        <div className="starSet1">
          <img src={star} alt="star" id="star1" />
          <img src={star} alt="star" id="star2" />
          <img src={star} alt="star" id="star3" />
        </div>
        <div className="starSet2">
          <img src={star} alt="star" id="star4" />
          <img src={star} alt="star" id="star5" />
        </div>
        <img src={cloud1} alt="cloud" id="darkCloud1" />
        <img src={cloud1} alt="cloud" id="darkCloud2" />
        <img src={cloud1} alt="cloud" id="darkCloud3" />
        <img src={cloud1} alt="cloud" id="darkCloud4" />
        <img src={cloud1} alt="cloud" id="darkCloud5" />
        <img src={cloud1} alt="cloud" id="darkCloud6" />

        <div class="spacer s0"></div>
        <div id="reveal-boxes">
          <div class="box serie">
            <img src={wp} alt="webpack" />
          </div>
          <div class="box serie">
            <img src={babel} alt="babel" />
          </div>
          <div class="box serie">
            <img src={npm} alt="npm" />
          </div>
          <div class="box serie">
            <img src={json} alt="json" />
          </div>
          <div class="box serie">
            <img src={xml} alt="xml" />
          </div>
          <div class="box serie">
            <img src={rest} alt="restapi" />
          </div>
          <div class="box serie">
            <img src={linux} alt="linux" />
          </div>
          <div class="box serie">
            <img src={aws} alt="aws" />
          </div>
          <div class="box serie">
            <img src={azure} alt="azure" />
          </div>
          <div class="box serie">
            <img src={ga} alt="ga" />
          </div>
          <div class="box serie">
            <img src={gsc} alt="gsc" />
          </div>
          <div class="box serie">
            <img src={wordpress} alt="wordpress" />
          </div>
        </div>
        <div class="spacer s2"></div>
      </div>
    );
  }
}
export default ToolStack;
