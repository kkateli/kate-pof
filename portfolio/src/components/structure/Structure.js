import React, { Component } from "react";
import "./Structure.css";
import $ from "jquery";
import languages from "../../assets/images/LANGUAGES.png";
import tree from "../../assets/images/tree.png";
import Leaf from "../leaf/Leaf";
import LanguageTable from "../languageTable/LanguageTable";
import kiwi from "../../assets/images/kiwi.png";
import animation from "../../assets/images/ANIMATION.png";
import AnimationTable from "../animationTable/AnimationTable";
import kiwi2 from "../../assets/images/kiwi2.png";
import tools from "../../assets/images/TOOLS.png";
import ToolStack from "../toolStack/ToolStack";
import projects from "../../assets/images/PROJECTS.png";
import Project1 from "../project1/Project1";
import Project2 from "../project2/Project2";
import ground from "../../assets/images/ground.png";
import Project3 from "../project3/Project3";
class Structure extends Component {
  componentDidMount() {
    var divh = $("#dummy").position().top;
    // calculating positions
    $(window).scroll(function(e) {
      var top = $(window).scrollTop();
      if (top > divh) {
        $("#dummy > .in-scroll").css(
          "transform",
          "translateX(-" + (top - divh) + "px)"
        );
        $("#dummy").css({
          position: "fixed",
          top: "0px"
        });
      } else {
        $("#dummy").css({
          top: "2000px",
          position: "absolute"
        });
      }
    });
  }
  render() {
    return (
      <div>
        <div class="hori-scroll" id="dummy">
          <div class="in-scroll">
         
            <img
              src={languages}
              alt="languages logo"
              style={{ marginLeft: "50px" }}
            />
            <Leaf />
            <LanguageTable />
            <img src={ground} alt="ground" className="groundBackground" id="ground1" />
            <img src={ground} alt="ground" className="groundBackground" id="ground2" />
            <img src={ground} alt="ground" className="groundBackground" id="ground3" />
            <img src={ground} alt="ground" className="groundBackground" id="ground4" />
            <img src={ground} alt="ground" className="groundBackground" id="ground5" />
            <img src={ground} alt="ground" className="groundBackground" id="ground6" />
            <img src={ground} alt="ground" className="groundBackground" id="ground7" />
            <img src={ground} alt="ground" className="groundBackground" id="ground8" />
            <img src={ground} alt="ground" className="groundBackground" id="ground9" />
            <img src={ground} alt="ground" className="groundBackground" id="ground10" />
            <img src={ground} alt="ground" className="groundBackground" id="ground11" />
            <img src={ground} alt="ground" className="groundBackground" id="ground12" />
            <img src={ground} alt="ground" className="groundBackground" id="ground13" />
            <img src={ground} alt="ground" className="groundBackground" id="ground14" />
            <img src={ground} alt="ground" className="groundBackground" id="ground15" />
            <img src={ground} alt="ground" className="groundBackground" id="ground16" />
            <img src={ground} alt="ground" className="groundBackground" id="ground17" />
            <img src={tree} alt="tree" id="tree1" className="tree" />
            <img src={kiwi} alt="kiwi" className="kiwi" />
            <img src={animation} alt="animation logo" className="animation" />
            <AnimationTable />
            <img src={kiwi2} alt="kiwi2" className="kiwi2" />
            <img src={tree} alt="tree" id="tree2" className="tree" />
            <img src={tools} alt="tools" className="tools" />
            <ToolStack />
            <img className="projects" src={projects} alt="projects" />
            {/* <img src={tree} alt="tree" id="tree3" className="tree"/> */}
            <Project2 />
            <img src={tree} alt="tree" id="tree4" className="tree" />
            <Project1 />
            <img src={tree} alt="tree" id="tree5" className="tree" />
            <Project3 />
            
          </div>
        </div>
      </div>
    );
  }
}
export default Structure;
