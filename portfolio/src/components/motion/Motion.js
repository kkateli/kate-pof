import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
// import TimelineMax from "gsap";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import pic1 from "../../assets/images/1.png";
import pic2 from "../../assets/images/2.png";
import pic3 from "../../assets/images/3.png";
import pic4 from "../../assets/images/4.png";
import pic5 from "../../assets/images/5.png";
import "./Motion.css";

class Motion extends Component {
  state = {
    images: [pic1, pic2, pic3, pic4, pic5],
    controller: new ScrollMagic.Controller(),
    currentImg: pic1
  };

  componentDidMount() {
    var obj = { curImg: 0 };
    var tween = TweenMax.to(obj, 0.5, {
      curImg: this.state.images.length - 1, // animate propery curImg to number of images
      roundProps: "curImg", // only integers so it can be used as an array index
      repeat: 3, // repeat infinite times
      immediateRender: true, // load first image automatically
      ease: "Linear.easeNone", // show every image the same ammount of time
      onUpdate: () => {
        // $("#myimg").attr("src", this.state.images[obj.curImg]);
        this.setState({ currentImg: this.state.images[obj.curImg] });
      }
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 15000,
      offset:1040,
      triggerHook:0
    })
      .setPin("#myimg")
      .setClassToggle("#imagesequence", "visible") // add class to reveal
      .setTween(tween)
      // .addIndicators({
      //   name: "scene",
      //   colorTrigger: "black",
      //   colorStart: "black"
      // }) // add indicators (requires plugin)
      .addTo(this.state.controller);
  }
  render() {
    return (
      <div style={{ background: "#7ec0ee" }}> 
        
        <div className="spacers2" />
        {/* here */}
        {/* <div style={{ height: "300px", background: "orange" }}>
          Space before Scroll!
        </div> */}
       
        <div className="spacers0" id="trigger" />
        <div id="imagesequence">
          <img
            src={this.state.currentImg}
            alt="running1"
            id="myimg"
            style={{opacity: 1}}
            ref={e => {
              this.obj = e;
            }}
          />
        </div>
        <div className="spacers2" />
      </div>
    );
  }
}
export default Motion;
