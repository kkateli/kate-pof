import React from "react";
import house4 from "../../assets/images/house4.png";
import house5 from "../../assets/images/house5.png";
import "./Project3.css";
import bee from "../../assets/images/bee.png";
const project3 = () => {
  return (
    <div className="project3">
      <img src={house4} alt="house4" id="house4" />
      <img src={house5} alt="house5" id="house5" />
       <img src={bee} alt="bee" className="bee3" />
     
     <div id="base4" />
    </div>
  );
};

export default project3;
