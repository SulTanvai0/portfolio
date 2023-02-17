import React from "react";
const instagram = "https://www.instagram.com/sultanvai0/";
const linkedin = "https://www.linkedin.com/in/muhammad-mehedi-hasan-204a9b261/";
const github = "https://github.com/SulTanVai1";
const Social = () => {
  return (
    <div className="home__social">
      <a href={instagram} className="home__social-icon" target="#_blank">
      <i className="uil uil-instagram"></i>
      </a>

      <a href={linkedin} className="home__social-icon" target="#_blank">
      <i className="uil uil-linkedin-alt"></i>
      </a>

      <a href={github} className="home__social-icon" target="#_blank">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
