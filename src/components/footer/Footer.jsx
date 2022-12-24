import React from 'react'
import './footer.css'
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Home</a>
      <ul className="permalinks">
        <li><a href="https://www.linkedin.com/in/mohit-raj-singh-m6164/" target="_blank"><BsLinkedin className='logoLink'/></a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://github.com/Mohit-Raj-Singh" target="_blank"><FaGithub className='logoGit'/></a></li>
      </ul>
    </footer>
  )
}

export default Footer