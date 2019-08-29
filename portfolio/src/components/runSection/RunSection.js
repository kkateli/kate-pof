import React, {Component} from 'react';
import Motion from "../motion/Motion";
import Ground from "../ground/Ground";

import Structure from "../structure/Structure";
class RunSection extends Component{
    render(){
        return(
            <div>
                <Motion />
                <Structure />
                <Ground />
            </div>

        )
    }
}
export default RunSection;