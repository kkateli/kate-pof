import React from "react";
import p2 from "../../assets/images/p2/1.png";
import detail2 from "../../assets/images/p2/detail.png";
import bee from "../../assets/images/bee.png";
import "./Project2.css";
const project2 =()=>{
    return(
        <div className="project2">
            <img className="p2p1" src={p2} alt="p2" />
            <img src={detail2} alt="detail" id="detail2"/>
            <img src={bee} alt="bee" id="bee2"/>

        </div>
    )
}
export default project2;