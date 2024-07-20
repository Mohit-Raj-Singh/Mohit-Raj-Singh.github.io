import React, { useEffect } from "react";
import "./Skills.css";
import skillData from "../../Data/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";
import toolsData from "../../Data/tools.json";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const firstRowSkills = skillData.slice(0, 5);
  const secondRowSkills = skillData.slice(5, 9);
  const thirdRowSkills = skillData.slice(9, 12);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="skills"
      className="skills-section text-black text-6xl my-10 py-10 w-full"
    >
      <div className="skills-inner-container">
        <h2 className="text-center my-10">Skills</h2>

        <div className="skills-container first-row">
          {firstRowSkills.map((item) => (
            <div
              className="tools rounded-lg border-2 border-[#59b0bb] shadow-[3px_3px_5px_2px_#59b0bb]"
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>

        <div className="skills-container second-row">
          {secondRowSkills.map((item) => (
            <div
              className="tools rounded-lg border-2 border-[#59b0bb] shadow-[3px_3px_5px_2px_#59b0bb]"
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>

        <div className="skills-container third-row">
          {thirdRowSkills.map((item) => (
            <div
              className="tools rounded-lg border-2 border-[#59b0bb] shadow-[3px_3px_5px_2px_#59b0bb]"
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="skills-inner-container">
        <h2 className="text-center my-10">Tools</h2>

        <div className="skills-container first-row">
          {toolsData.map((item) => (
            <div
              className="tools rounded-lg border-2 border-[#59b0bb] shadow-[3px_3px_5px_2px_#59b0bb]"
              key={item.id}
            >
              <img
                title={item.title}
                src={item.image}
                alt={item.title}
                className="w-24 aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
