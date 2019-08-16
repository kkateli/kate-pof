import React , {Component} from "react";
import be from "../../../assets/images/be.png";
import bird from "../../../assets/images/bird.png";
import "../skills.css";
class Fe extends Component{
    render(){
        return(
            <div>
                <div className="skillWrapper">
                <img className="skillTitle" src={be} alt="skill title" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                
                </div>
                

            </div>

        )
    }
}
export default Fe;