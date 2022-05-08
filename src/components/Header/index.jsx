import React from "react";
import "./index.css";
import mainLogo from "./../../assets/img/mainLogo.png";
import mail from "./../../assets/img/mail.png";
import phone from "./../../assets/img/phone.png";
import BurgerMenu from "./../BurgerMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="menu">
          <BurgerMenu />
          <img src={mainLogo} alt="main logo"></img>
        </div>
        <div className="contacts">
          <div className="email">
            <p>Пишите нам на email</p>
            <img src={mail} alt="mail logo"></img>
            <a href="mailto:info@diagnistics.by">info@diagnistics.by</a>
          </div>
          <div className="phone">
            <p><img src={phone} alt="phone"></img>Есть вопросы? Звоните!</p>
            <a href="tel:+375(29)456-45-45" title="click to call" className="phoneNumber">+375 (29) 456-45-45</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
