import React from "react";
import WhyWeParagraph from "../WhyWeParagraph";
import tv from "./../../assets/img/tv.png";
import "./index.css";

const WhyWe = () => {
  const paragraphs = [
    "Отчет на который на 100% можно положиться",
    "Экономию времени и прогнозируемость сроков",
    "Предварительные результаты сразу на месте",
  ];

  return (
    <div className="whyWeWrapper">
      <div className="sectionsWrapper">
        <div className="left"></div>
        <div className="right"></div>
        <div className="container text">
          <div className="leftContent">
            <h2 className="hLeft">
              Мы работаем быстро <br /> и наши отчеты проходят согласование с
              первого раза
            </h2>
            <p className="pLeft">
              Над вашим объектом работает целая команда:
              <br /> 3 ГИПа (главных инженеров проектов) с опытом работы от 6
              лет и 2 штатных сотрудника для камеральных работ
            </p>
          </div>
          <div>
            <img src={tv} alt="device" className="imgDevice" />
          </div>
          <div className="divRightContent">
            <h3 className="hRight">Вы и Ваши архитекторы получаете:</h3>
            {paragraphs.map((text) => {
              return <WhyWeParagraph text={text} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
