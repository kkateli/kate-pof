import React, {Component} from 'react';
import Motion from "../motion/Motion";
import Ground from "../ground/Ground";
import CloudBackground from '../cloudBackground/CloudBackground';
import Structure from "../structure/Structure";
class RunSection extends Component{
    render(){
        return(
            <div>
                <Motion />
                <CloudBackground />
                <Structure />
                <Ground />
            </div>

        )
    }
}
export default RunSection;