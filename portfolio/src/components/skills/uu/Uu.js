import React , {Component} from "react";
import uu from "../../../assets/images/uu.png";
import bird from "../../../assets/images/bird.png";
import "../skills.css";
class Uu extends Component{
    render(){
        return(
            <div>
                <div className="skillWrapper">
                <img className="skillTitle" src={uu} alt="skill title" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" src={bird} alt="bird" />
                <img className = "bird" style={{width:"100px"}} src={bird} alt="bird" />
                
               
                </div>
                

            </div>

        )
    }
}
export default Uu;