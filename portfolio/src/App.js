import React from 'react';
import './App.css';
import Banner from "./components/banner/Banner";
import JumpGirl from "./components/jumpGirl/JumpGirl";
import RunSection from './components/runSection/RunSection';
function App() {
  return (
    <div className="App">
     <Banner />
     <JumpGirl />
      <RunSection />
      
    </div>
  );
}

export default App;
