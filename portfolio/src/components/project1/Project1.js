import React from "react";
import bee from "../../assets/images/bee.png";
import "./Project1.css";
import house1 from "../../assets/images/house1.png";
const project1 = () => {
  return (
    <div className="project1">
     <img src={house1} alt="house1" className="house1"/>
     <div id="base1" />
      <img src={bee} alt="bee" id="bee1"/>
      <div id="base2" />
      
    </div>
  );
};
export default project1;
