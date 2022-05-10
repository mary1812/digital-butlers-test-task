import React, { useState, useEffect } from "react";
import "./index.css";
import mainLogo from "./../../assets/img/mainLogo.png";
import mail from "./../../assets/img/mail.png";
import phone from "./../../assets/img/phone.png";
import BurgerMenu from "./../BurgerMenu";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scroll < 50 ? "header" : "header show"}>
      <div className="container">
        <div className="menu">
          <BurgerMenu />
          <img src={mainLogo} alt="main logo" className="logoEnginee"/>
        </div>
        <div className="contacts">
          <div className="email">
            <p className="contactToUs">Пишите нам на email</p>
            <img src={mail} alt="mail logo" className="smallImage"/>
            <a href="/" className="linkToEmail">
              info@diagnistics.by
            </a>
          </div>
          <div className="phone">
            <p className="contactToUs">
              <img src={phone} alt="phone" className="smallImage"/>Есть
              вопросы? Звоните!
            </p>
            <a
              href="tel:+375(29)456-45-45"
              title="click to call"
              className="phoneNumber"
            >
              +375 (29) 456-45-45
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
