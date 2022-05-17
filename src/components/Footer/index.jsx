import React from "react";
import "./index.css";
import founder from '../../assets/img/founder.png'

const Footer = () => {
  return (
    <section className="lastSectionWrapper">
      <aside className="lastSectionAside">
        <h1 className="asideHeader">Мы работаем в комплексе</h1>
        <p className="asideParagraph">
          чтобы Вы не тратили время на поиск и организацию множества подрядчиков
        </p>
      </aside>
      <footer className="lastSection">
        <div className="footerLeftImage"/>
        <article className="stepOneArticle">
          <div className="stepOneWrapper">
            <div className="preparatoryWork">
              <span className="stepOneSpan">шаг №1. </span>
              <h2 className="stepOneHeader">Подготовительные работы</h2>
            </div>
            <p className="stepOneDescription">
              Мы осматриваем здание, делаем замеры и проверяем наличие визуально
              заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.
            </p>
          </div>
          <div className="quoteWrapper">
          <img className="founderImg" src={founder} alt="project engineer" />
            <div className="quote">
              <p className="quoteText">
              “Задача этого этапа получить максимально полное представление о конструкции здания, условиях его эксплуатации и возможных слабых местах“
              </p>
              <h3 className="quoteAuthor">
              АЛЕКСЕЙ, обследователь и главный инженер проектов
              </h3>
            </div>
          </div>
        </article>
      </footer>
    </section>
  );
};

export default Footer;
