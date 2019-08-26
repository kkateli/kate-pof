import React, { Component } from "react";
import "./Structure.css";
import $ from "jquery";
import languages from "../../assets/images/LANGUAGES.png";
import tree from "../../assets/images/tree.png";
import Leaf from "../leaf/Leaf";
import LanguageTable from "../languageTable/LanguageTable";
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
          <div class="in-scroll" >
          <img src={languages} alt="languages logo"  style={{marginLeft:"50px"}}/>
          <Leaf />
          
           {/* <img src={tree} alt="tree" className="tree"/> */}
          <LanguageTable />
           
         
            </div>
        </div>
      </div>
    );
  }
}
export default Structure;
