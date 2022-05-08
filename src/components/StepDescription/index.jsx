import React from "react";
import "./index.css";

const StepDescription = ({ img, text }) => {
  return (
    <div className="mainStepWrap">
      <div className="stepsWrapper">
        <img src={img} alt="" />
        <h2 className="headerStep">{text}</h2>
      </div>
    </div>
  );
};

export default StepDescription;
