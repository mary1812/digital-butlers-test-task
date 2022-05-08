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
            <p className="contactToUs">Пишите нам на email</p>
            <img src={mail} alt="mail logo" className="smallImage"></img>
            <a href="/" className="linkToEmail">info@diagnistics.by</a>
          </div>
          <div className="phone">
            <p className="contactToUs"><img src={phone} alt="phone" className="smallImage"></img>Есть вопросы? Звоните!</p>
            <a href="tel:+375(29)456-45-45" title="click to call" className="phoneNumber">+375 (29) 456-45-45</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
