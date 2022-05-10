import React from "react";
import './index.css'
import pointer from "./../../assets/img/pointer.png";

const Cards = ({imgSrc, header, paragraph, href}) => {
  return (
    <div className="container mobContainer">
      <div className="card">
        <img src={imgSrc} alt="" className="imgHouse" />
        <h3 className="hCardSection">{header}</h3>
        <p className="pCardSection">
         {paragraph}
        </p>
        <a href={href} className="aCardSection">
          Подробнее <img src={pointer} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Cards;
