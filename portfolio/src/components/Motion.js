// import ScrollMagic from "scrollmagic";
import * as Scrollmagic from "react-scrollmagic";
import React, { Component } from "react";
// import { Tween, Timeline, Linear } from "react-gsap";

import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";
import { TweenMax } from "gsap/TweenMax";
import { Linear } from "gsap";
import $ from "jquery";
class Motion extends Component {
  state = {
    images: [pic1, pic2]
  };

  componentDidMount() {
    var obj = { curImg: 0 };
    TweenMax.to(obj, 0.5, {
      curImg: this.state.images.length - 1, // animate propery curImg to number of images
      roundProps: "curImg", // only integers so it can be used as an array index
      repeat: 3, // repeat 3 times
      immediateRender: true, // load first image automatically
      ease: Linear.easeNone, // show every image the same ammount of time
      onUpdate: () => {
        $("#myimg").attr("src", this.state.images[obj.curImg]);
      }
    });
  }
  render() {
    return (
      <div>
        <Scrollmagic.Controller>
          <Scrollmagic.Scene
            triggerElement="#trigger"
            duration={300}
            indicators={true}
          >
            {(progress, event) => {
              return (
                <img
                  src={pic1}
                  alt="running1"
                  id="myimg"
                  ref={e => {
                    this.obj = e;
                  }}
                />
              );
            }}
          </Scrollmagic.Scene>
        </Scrollmagic.Controller>
      </div>
    );
  }
}
export default Motion;
