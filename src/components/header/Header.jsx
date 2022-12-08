import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";


const Header = () => {
  return (



    <header>
      <div className="container header__container">

        <h3>Hello i'm </h3>
        <h1>Mohit Raj Singh</h1>
        <h4 className="text__light">Full Stack Web Developer</h4>

        <CTA />
        <HeaderSocials />


        <div className="me">
          <img src={Me} alt="my image" />
        </div>



        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;




