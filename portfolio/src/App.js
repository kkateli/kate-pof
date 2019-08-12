import React from 'react';
import './App.css';
import Motion from "./components/motion/Motion";
// import Sample from "./components/sample/Sample";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="App">
     <Banner />
      <Motion />
      {/* <Sample /> */}
    </div>
  );
}

export default App;
