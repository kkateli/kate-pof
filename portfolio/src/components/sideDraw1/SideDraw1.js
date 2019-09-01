import React, { Component } from "react";
import seagle from "../../assets/images/seagle.png";
import seagle2 from "../../assets/images/seagle2.png";
import kiwi from "../../assets/images/kiwi.png";
import tree from "../../assets/images/tree.png";
import "./SideDraw1.css";
import { TweenMax } from "gsap/TweenMax";
import {TimelineMax} from "gsap/TimelineMax";
import {Linear} from "gsap/EasePack";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

class SideDraw extends Component {
    state = {
        controller: new ScrollMagic.Controller({vertical: false})
      };
      componentDidMount() {
        var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo("#sideDraw1 .seagle", 1, {left: -50}, {left: 200, ease: Linear.easeNone}),
            TweenMax.fromTo("#sideDraw1 .seagle2", 1, {left: -50}, {left: -200, ease: Linear.easeNone})
        ]);

    // build scene
    new ScrollMagic.Scene({triggerElement: "#sideDraw1", offset:-200, duration:500})
                    .setTween(tween) 
                    // .addIndicators({name:"sideDraw"}) // add indicators (requires plugin)
                    .addTo(this.state.controller);
}

  render() {
    return (
      <div className="sideDraw1Wrapper">
<div id="sideDraw1">
        <div className="circle"></div>
        <img src={seagle2} alt="seagle2" className="seagle2" />
        <img src={seagle} alt="seagle" className="seagle" />
        <img src={tree} alt="tree" id="tree1" />
        <img src={kiwi} alt="kiwi" className="kiwi" />
      </div>
      </div>
      
    );
  }
}
export default SideDraw;
