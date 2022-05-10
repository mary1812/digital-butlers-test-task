import React from "react";
import stamp from "./../../assets/img/stamp.png";
import person from "./../../assets/img/preview.png";
import polygon from "./../../assets/img/polygon.png"
import './index.css';

const VideoSpinner = () => {
  return (
    <div className="spinnerWrapper">
      <div className="spinnerImgWrapper">
        <img src={stamp} alt="text stamp" className="textStamp"/>
        <img src={person} alt="person" className="personPhoto"/>
        <a href="/" className="polygon"><img src={polygon} alt="cursor"/></a>
        
      </div>
    </div>
  );
};

export default VideoSpinner;

