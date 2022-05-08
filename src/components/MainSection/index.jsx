import React from "react";
import download from "./../../assets/img/download.png";
import firstStroke from "./../../assets/img/firstStroke.png";
import secondStroke from "./../../assets/img/secondStroke.png";
import thirdStroke from "./../../assets/img/thirdStroke.png";
import StepDescription from "./../StepDescription";
import "./index.css";

const MainSection = () => {
  const stepInfo = [
    { text: "Начинаем работать без аванса", img: firstStroke },
    { text: "Предоставляем отсрочку платежа", img: secondStroke },
    { text: "Всегда называем справедливую цену", img: thirdStroke },
  ];

  return (
    <div className="mainWrapper">
      <div className="wraptext">
        <div className="textWrapper">
          <div className="textInfo">
            <h1 className="mainHeader">
              Независимое обследование зданий и сооружений
            </h1>
            <p className="textInfoPar">
              антенн, труб, теплосетей, канализаций и других объектов
              строительства
            </p>
          </div>
          <div className="getCommercial">
            <button href="/" className="btnGetCommercial">
              <img src={download} alt="download icon" className="smallImage" />
              получить коммерческое
            </button>
            <p className="commercialPar">
              Отправьте техзадание и получите коммерческое предложение в течении
              15 минут на свой email или в мессенджер
            </p>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          {stepInfo.map(({ img, text }) => {
            return <StepDescription key={text} img={img} text={text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
