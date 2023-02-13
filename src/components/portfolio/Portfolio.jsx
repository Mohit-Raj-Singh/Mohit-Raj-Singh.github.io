import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.png";
import Img2 from "../../assets/portfolio2.png";
import Img3 from "../../assets/portfolio3.png";
import Img4 from "../../assets/portfolio4.png";

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"Uboric - Clone",
      description:"Uboric is an India-based E-commerce that delivers throughout India. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep.",
      tech:"React.js | React-Redux",
      github:"https://github.com/Mohit-Raj-Singh/-daily-purpose-3625",
      demo:"https://u-shopic.vercel.app/"
    },
    {
      id:2,
      image:Img2,
      title:"Rentomojo - Clone",
      description:"India's leading rental platform brings to you a wide range of products on rent. Experience the freedom to live the life you want, now.",
      tech:"HTML | CSS | JS",
      github:"https://github.com/pratiksontakke/prompt-advertisement-8166",
      demo:"https://jovial-dusk-c6ab4b.netlify.app/"
    },
    {
      id:3,
      image:Img3,
      title:"Kickstarter - Clone",
      description:"Kickstarter is one of those platforms that gives you space to work with people who know you and support you",
      tech:"HTML | CSS | JS",
      github:"https://github.com/RajatMujawar123/large-house-6330",
      demo:"https://legendary-pony-75d1d1.netlify.app/"
    },
    {
      id:4,
      image:Img4,
      title:"Gearbest - Clone",
      description:"Gearbest provides the most cost-efficient delivery service covering 200+ countries and regions, most of which enjoy free door-to-door delivery.",
      tech:"HTML | CSS | JS",
      github:"https://github.com/Mohit-Raj-Singh/Team-Gearbest",
      demo:"https://celadon-cendol-c3a752.netlify.app/"
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,tech,description,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <h4>Tech Stack : {tech}</h4>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Deploy Link
                </a>
              </div>
            </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
