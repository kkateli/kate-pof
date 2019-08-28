import React, {Component} from "react";
import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "./ToolStack.css";
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
							.addIndicators({name: "serie " + (i+1) }) // add indicators (requires plugin)
							.addTo(this.state.controller);
		}
      }
    render(){
        return(
<div className="brickStack">
<div class="spacer s0"></div>
<div id="reveal-boxes">
	<div class="box serie"><p>1</p></div>
	<div class="box serie"><p>2</p></div>
	<div class="box serie"><p>3</p></div>
	<div class="box serie"><p>4</p></div>
	<div class="box serie"><p>5</p></div>
    <div class="box serie"><p>6</p></div>
    <div class="box serie"><p>7</p></div>
    <div class="box serie"><p>8</p></div>
	<div class="box serie"><p>9</p></div>
	<div class="box serie"><p>10</p></div>
	<div class="box serie"><p>11</p></div>
    <div class="box serie"><p>12</p></div>
</div>
<div class="spacer s2"></div>
</div>
        )
    }
}
export default ToolStack;