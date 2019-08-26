import React , {Component} from "react";
import ani from "../../../assets/images/animationCloud.png";
import bird from "../../../assets/images/bird.png";
import "../skills.css";
class Ani extends Component{
    render(){
        return(
            <div>
                <div className="skillWrapper">
                <img className="skillTitle" src={ani} alt="skill title" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" style={{width:"100px"}} src={bird} alt="bird" />
                </div>
                

            </div>

        )
    }
}
export default Ani;