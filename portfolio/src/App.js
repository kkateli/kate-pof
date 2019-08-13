import React from 'react';
import './App.css';
import Motion from "./components/motion/Motion";
// import Sample from "./components/sample/Sample";
import Banner from "./components/banner/Banner";
import JumpGirl from "./components/jumpGirl/JumpGirl";
function App() {
  return (
    <div className="App">
     <Banner />
     <JumpGirl />
      <Motion />
      
    </div>
  );
}

export default App;
