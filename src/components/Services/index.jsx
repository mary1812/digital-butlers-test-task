import React from "react";
import Cards from "../Cards";
import card1 from "./../../assets/img/card1.png";
import card2 from "./../../assets/img/card2.png";
import card3 from "./../../assets/img/card3.png";
import card4 from "./../../assets/img/card4.png";
import progressBar from "./../../assets/img/progressBar.png";
import HorizontalScroll from "react-scroll-horizontal";
import "./index.css";

const Services = () => {
  const cards = [
    {
      imgSrc: card1,
      header: "Общее обследование",
      paragraph:
        "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.",
      href: "/",
    },
    {
      imgSrc: card2,
      header: "Тепловизионная съемка",
      paragraph:
        "Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания",
      href: "/",
    },
    {
      imgSrc: card3,
      header: "Телеинспекция инженерных сетей",
      paragraph:
        "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
      href: "/",
    },
    {
      imgSrc: card4,
      header: "Телеинспекция инженерных сетей",
      paragraph:
        "Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.",
      href: "/",
    },
    {
      imgSrc: card3,
      header: "Общее обследование",
      paragraph:
        "Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров",
      href: "/",
    },
  ];

  return (
    <div className="servicesWrapper">
      <div className="textServices">
        <h1 className="headerServices">Услуги</h1>
        <h2 className="mainHeaderServices">
          Выполняем как комплексное обследование, так и отдельные виды работ
        </h2>
      </div>
      <HorizontalScroll reverseScroll={true} animValues={1} style={{height: '450px'}} >
        <section className="cardSection">
          {cards.map((cardDesc) => {
            return (
              <Cards
                imgSrc={cardDesc.imgSrc}
                header={cardDesc.header}
                paragraph={cardDesc.paragraph}
                href={cardDesc.href}
                key={cardDesc.header+cardDesc.paragraph}
              />
            );
          })}
        </section>
      </HorizontalScroll>
      <img className="imgLine" src={progressBar} alt="progress line" />
    </div>
  );
};

export default Services;
