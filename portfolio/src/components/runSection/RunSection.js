import React, {Component} from 'react';
import Motion from "../motion/Motion";
import Ground from "../ground/Ground";
class RunSection extends Component{
    render(){
        return(
            <div>
                <Motion />
                <Ground />
            </div>

        )
    }
}
export default RunSection;