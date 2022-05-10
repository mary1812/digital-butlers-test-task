import React from "react";
import icon from "./../../assets/img/icon.png";
import "./index.css"


const WhyWeParagraph = ({text}) => {
  return (
    <div className="advantages">
      <img src={icon} alt="check mark" />
      <p className="listAdvantages">{text}</p>
    </div>
  );
};

export default WhyWeParagraph;
