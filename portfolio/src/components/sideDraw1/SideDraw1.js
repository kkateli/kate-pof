import React, { Component } from "react";
import seagle from "../../assets/images/seagle.png";
import seagle2 from "../../assets/images/seagle2.png";
import kiwi from "../../assets/images/kiwi.png";
import tree from "../../assets/images/tree.png";
import "./SideDraw1.css";
class SideDraw extends Component {
  render() {
    return (
      <div className="sideDraw1">
        <div className="circle"></div>
        <img src={seagle2} alt="seagle2" className="seagle2" />
        <img src={seagle} alt="seagle" className="seagle" />
        <img src={tree} alt="tree" id="tree1" />
        <img src={kiwi} alt="kiwi" className="kiwi" />
        
      </div>
    );
  }
}
export default SideDraw;
