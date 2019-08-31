import React, {Component} from "react";
import ScrollMagic from "ScrollMagic";
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
import cloud1 from '../../assets/images/darkCloud1.png';
import cloud2 from "../../assets/images/darkCloud2.png";
class ToolStack extends Component{
    state = {
       //NOTE 
        controller: new ScrollMagic.Controller({vertical: false})
        
      };
    
      componentDidMount() {
        var revealElements = document.getElementsByClassName("serie");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: -50,												 // start a little later
								
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							// .addIndicators({name: "serie " + (i+1) }) // add indicators (requires plugin)
							.addTo(this.state.controller);
		}
      }
    render(){
        return(
<div className="brickStack">
<img src={tools} alt="tools" className="tools" />
<img src={star} alt="star" id="star1" />
<img src={star} alt="star" id="star2" />
<img src={star} alt="star" id="star3" />
<img src={star} alt="star" id="star4" />
<img src={star} alt="star" id="star5" />
<img src={cloud1} alt="cloud" id="darkCloud1" />
<img src={cloud1} alt="cloud" id="darkCloud2" />
<img src={cloud1} alt="cloud" id="darkCloud3" />
<img src={cloud1} alt="cloud" id="darkCloud4" />
<img src={cloud1} alt="cloud" id="darkCloud5" />
<img src={cloud1} alt="cloud" id="darkCloud6" />
<img src={cloud2} alt="cloud" id="darkCloud7" />
<img src={cloud2} alt="cloud" id="darkCloud8" />
<img src={cloud2} alt="cloud" id="darkCloud9" />
<img src={cloud2} alt="cloud" id="darkCloud10" />
<img src={cloud2} alt="cloud" id="darkCloud11" />
<img src={cloud2} alt="cloud" id="darkCloud12" />

<div class="spacer s0"></div>
<div id="reveal-boxes">
	<div class="box serie"><img src={wp} alt="webpack" /></div>
	<div class="box serie"><img src={babel} alt="babel" /></div>
	<div class="box serie"><img src={npm} alt="npm" /></div>
	<div class="box serie"><img src={json} alt="json" /></div>
	<div class="box serie"><img src={xml} alt="xml" /></div>
    <div class="box serie"><img src={rest} alt="restapi" /></div>
    <div class="box serie"><img src={linux} alt="linux" /></div>
    <div class="box serie"><img src={aws} alt="aws" /></div>
	<div class="box serie"><img src={azure} alt="azure" /></div>
	<div class="box serie"><img src={ga} alt="ga" /></div>
	<div class="box serie"><img src={gsc} alt="gsc" /></div>
    <div class="box serie"><img src={wordpress} alt="wordpress" /></div>
</div>
<div class="spacer s2"></div>
</div>
        )
    }
}
export default ToolStack;