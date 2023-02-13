import React from "react";
import Resume from "../../assets/Mohit-Raj-Singh-Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      {/* <a href={Resume} download className="btn"> */}
      <a href="https://drive.google.com/file/d/1pU66hMY_E8PabIlRXU-TdMBk_0yRGUEA/view?usp=sharing" target="_blank" className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;
