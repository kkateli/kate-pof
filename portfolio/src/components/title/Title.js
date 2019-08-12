import React from "react";
import titleBanner from "../../assets/images/title.png";
import "./Title.css";
const title = () => {
  return (
    <div className="titleWraper">
      <img className="title" src={titleBanner} alt="title" />
    </div>
  );
};
export default title;
