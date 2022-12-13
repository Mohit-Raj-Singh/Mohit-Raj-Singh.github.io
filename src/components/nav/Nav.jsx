import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiArrowToBottom } from "react-icons/bi";
import { useState } from "react";
import { RiServiceLine } from "react-icons/ri";
import Resume from "../../assets/Mohit-Raj-Singh-Resume.pdf";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <h6>Home</h6>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      ><h6>About Me</h6>
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      ><h6>Skills</h6>
        <BiBook />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      ><h6>Portfolio</h6>
        <RiServiceLine />
      </a>

      <a
        href={Resume} download
      ><h6>Resume</h6>
        <BiArrowToBottom />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      ><h6>Contact Me</h6>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
