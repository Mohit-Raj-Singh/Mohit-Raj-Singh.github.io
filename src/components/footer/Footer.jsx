import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import { SiHackerrank } from "react-icons/si";
import { BsLinkedin } from 'react-icons/bs'
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><img src={Logo} alt='logo' /></a>
      {/* <a href="#" className="footer__logo">Home</a> */}
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/mohit-raj-singh-m6164/" target="_blank" ><BsLinkedin/></a>
      {/* <a href="https://www.instagram.com/iam_mohitrajs/"><FiInstagram/></a> */}
       <a href="https://github.com/Mohit-Raj-Singh" target="_blank" ><FaGithub/></a>
       <a href="https://www.hackerrank.com/mohit94e" target="_blank" ><SiHackerrank /></a>
       
       
      </div>
    </footer>
  )
}

export default Footer