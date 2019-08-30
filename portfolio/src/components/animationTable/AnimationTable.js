import React from "react";
import label_a from "../../assets/images/label_a.png";
import label_b from "../../assets/images/label_b.png";
import label_e from "../../assets/images/label_e.png";
import label_ex from "../../assets/images/label_ex.png";
import label_i from "../../assets/images/label_i.png";
import flower from "../../assets/images/flower.png";
import "./AnimationTable.css";
const animationTable =()=>{
    return(
<div className="animationTable">

      <table>
        <tr>
          <th xs lg="3" />
          <th>
           <div className="animationDetail">ScrollMagic</div>
          </th>
          <th>
          <div className="animationDetail">GSAP</div>
          </th>
          <th>
          <div className="animationDetail">PixiJS</div>
          </th>
          <th>
          <div className="animationDetail">Three.js</div>
          </th>
        </tr>
        <tr>
          <td>
            <img className="animationLabel" src={label_ex} alt="label_ex" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
        </tr>
        <tr>
          <td>
            <img className="animationLabel" src={label_a} alt="label_a" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td xs lg="3" />
          <td xs lg="3" />
          <td xs lg="3" />
          
        </tr>
        <tr>
          <td>
            <img className="animationLabel" src={label_i} alt="label_i" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
         
        </tr>
        <tr>
          <td>
            <img className="animationLabel" src={label_e} alt="label_e" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          
        </tr>
        <tr>
          <td>
            <img className="animationLabel" src={label_b} alt="label_b" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
          <td>
              <img className="flower" src={flower} alt="flower" />
          </td>
        
        </tr>
      </table>
</div>
    )
}
export default animationTable;