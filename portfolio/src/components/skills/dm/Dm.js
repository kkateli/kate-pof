import React , {Component} from "react";
import dm from "../../../assets/images/dm.png";
import bird from "../../../assets/images/bird.png";
import "../skills.css";
class Dm extends Component{
    render(){
        return(
            <div>
                <div className="skillWrapper">
                <img className="skillTitle" src={dm} alt="skill title" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                
                </div>
                

            </div>

        )
    }
}
export default Dm;