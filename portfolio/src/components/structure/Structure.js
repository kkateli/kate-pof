import React, { Component } from "react";
import "./Structure.css";
import $ from "jquery";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

class Structure extends Component {
  state = {
    controller: new ScrollMagic.Controller()
  };

  componentDidMount() {
    let $target = $(".slider").first(),
      currentPosition = parseInt($target.css("transform").split(",")[4]),
      moveBy = function(scrolledBy) {
        currentPosition += scrolledBy;
        $target.css("transform", "translateX(" + currentPosition + "px)");
      },
      lastScrollTop = 0;

    currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
    $(window).bind("scroll", function(e) {
      var scrolledBy = $(window).scrollTop() - lastScrollTop;
      moveBy(-scrolledBy);
      lastScrollTop = $(window).scrollTop();
    });

    new ScrollMagic.Scene({
      triggerElement: "#triggerWalker",
      triggerHook: 0.5,
      offset: -1000
    })
      .setPin("#walker")
      .addIndicators({name:"walker"}) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div>
        <div class="spacer s2" />
        <div id="triggerWalker" class="spacer s0" />

        <div id="walker">
          <div class="slider">
            <div>
              {" "}
              <div class="slide" />
            </div>
            <div>
              {" "}
              <div class="slide" />
            </div>
            <div>
              {" "}
              <div class="slide" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Structure;
