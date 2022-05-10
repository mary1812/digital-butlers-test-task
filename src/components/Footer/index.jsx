import React from "react";
import "./index.css";
import founder from '../../assets/img/founder.png'

const Footer = () => {
  return (
    <div className="lastSectionWrapper">
      <div className="footer">
        <h1 className="hFooter">Мы работаем в комплексе</h1>
        <p className="pFooter">
          чтобы Вы не тратили время на поиск и организацию множества подрядчиков
        </p>
      </div>
      <div className="stepOne">
        <div className="leftstepOne"/>
        <div className="secondSectionWrapper">
          <div className="stepOneWrapper">
            <div className="stepHeader">
              <span className="spanStepOne">шаг №1. </span>
              <h2 className="stepOneHeader">Подготовительные работы</h2>
            </div>
            <p className="stepDesc">
              Мы осматриваем здание, делаем замеры и проверяем наличие визуально
              заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.
            </p>
          </div>
          <div className="quoteWrapper">
          <img className="founderImg" src={founder} alt="" />
            <div className="quote">
            
              <p className="quoteText">
              “Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“
              </p>
              <h3 className="quoteAuthor">
              АЛЕКСЕЙ, обследователь и главный инженер проектов
              </h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
