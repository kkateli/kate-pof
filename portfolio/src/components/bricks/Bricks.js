import React from "react";
import bricksBuilding from "../../assets/images/bricks.png";
import "./Bricks.css";
const bricks = () => {
  return (
    <div className="bricksWraper">
      <img className="bricks" src={bricksBuilding} alt="bricks" />
    </div>
  );
};
export default bricks;
