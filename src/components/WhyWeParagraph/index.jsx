import React from "react";
import icon from "./../../assets/img/icon.png";
import "./index.css"


const WhyWeParagraph = ({text}) => {
  return (
    <div className="rightContent">
      <img src={icon} alt="" />
      <p className="pRight">{text}</p>
    </div>
  );
};

export default WhyWeParagraph;
