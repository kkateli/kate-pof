import React,{Component} from "react";
import arrow from "../../assets/images/arrow.png";
import scrollWord from "../../assets/images/scrollWord.png"; 
import "./ScrollLabel.css";
import {flash} from "react-animations";
import Radium, {StyleRoot} from 'radium';
const styles = {
    flash: {
      animation: '2s',
      animationName: Radium.keyframes(flash, 'flash')
    }
  }

class ScrollLabel extends Component{
    render(){
        return(
            <div className="scrollWraper"> 
    
            <StyleRoot>
            <img className="scrollArrow" src={arrow} alt="arrow" />
            <img className="scrollWord" src={scrollWord} alt="word" style={styles.flash}/>  
            </StyleRoot> 
            
            </div>
                )
    }
    
}
export default ScrollLabel;