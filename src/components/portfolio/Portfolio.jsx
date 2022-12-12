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
      tech:"React.js | React-Redux",
      github:"https://github.com/Mohit-Raj-Singh/-daily-purpose-3625",
      demo:"https://u-shopic.vercel.app/"
    },
    {
      id:2,
      image:Img2,
      title:"Rentomojo - Clone",
      tech:"HTML | CSS | JS",
      github:"https://github.com/pratiksontakke/prompt-advertisement-8166",
      demo:"https://jovial-dusk-c6ab4b.netlify.app/"
    },
    {
      id:3,
      image:Img3,
      title:"Kickstarter - Clone",
      tech:"HTML | CSS | JS",
      github:"https://github.com/RajatMujawar123/large-house-6330",
      demo:"https://legendary-pony-75d1d1.netlify.app/"
    },
    {
      id:4,
      image:Img4,
      title:"Gearbest - Clone",
      tech:"HTML | CSS | JS",
      github:"https://github.com/Mohit-Raj-Singh/Team-Gearbest",
      demo:"https://celadon-cendol-c3a752.netlify.app/"
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id,image,title,tech,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
