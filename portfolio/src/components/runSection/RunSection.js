import React, {Component} from 'react';
import Motion from "../motion/Motion";
import Ground from "../ground/Ground";
import CloudBackground from '../cloudBackground/CloudBackground';
class RunSection extends Component{
    render(){
        return(
            <div>
                <Motion />
                <CloudBackground />
                <Ground />
            </div>

        )
    }
}
export default RunSection;