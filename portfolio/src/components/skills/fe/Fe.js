import React , {Component} from "react";
import fe from "../../../assets/images/fe.png";
import bird from "../../../assets/images/bird.png";
import "../skills.css";
class Fe extends Component{
    render(){
        return(
            <div>
                <div className="skillWrapper">
                <img className="skillTitle" src={fe} alt="skill title" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                
                </div>
                

            </div>

        )
    }
}
export default Fe;