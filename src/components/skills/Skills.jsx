import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { DiJsBadge, DiCss3 } from "react-icons/di";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaReact, FaNode } from "react-icons/fa";
import { SiChakraui, SiRedux, SiExpress, SiMongodb, SiNetlify, SiVercel, SiVisualstudiocode, SiPostman } from "react-icons/si";

const Experience = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>


      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Tech Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <DiJsBadge className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiChakraui className="experience__details-icon" />
              <div>
                <h4>Chakra-UI</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>React-Redux</h4>
              </div>
            </article>

            <article className="experience__details">
              <FaNode className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>Express.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
              </div>
            </article>

          </div>
        </div>



        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNetlify className="experience__details-icon" />
              <div>
                <h4>Netlify</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiVercel className="experience__details-icon" />
              <div>
                <h4>Vercel</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiVisualstudiocode className="experience__details-icon" />
              <div>
                <h4>vsCode</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiPostman className="experience__details-icon" />
              <div>
                <h4>Postman</h4>
              </div>
            </article>
          </div>

          <hr />
          <h3 className="softSkills">Soft Skills</h3>


          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Time Management</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Team Work</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Remote Work</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Leadership</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
