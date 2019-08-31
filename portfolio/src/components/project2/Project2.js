import React from "react";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import bee from "../../assets/images/bee.png";
import "./Project2.css";
const project2 =()=>{
    return(
        <div className="project2">
            <img src={house2} alt="house2" className="house2" />
            <img src={house3} alt="house3" className="house3" />
            <div id="base3" />
            <img src={bee} alt="bee" id="bee2"/>

        </div>
    )
}
export default project2;