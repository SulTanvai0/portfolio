import React from "react";

const ProjectsCard = ({ projects }) => {
  const {title, img, gitLink, projectLink, technology, Duration } =
    projects;

  return (
   <div className="projects__card">
    <img src={img} alt="" className="project__img" />
        <h4 className="projects__title">{title}</h4>
        <div className="project__links">
        <div>
           <a href={projectLink} className="projects__btn" target="*_blank"> See  {title} <i className="bx bx-right-arrow-alt projects__button-icon"></i>
           
           </a>

        </div>
        <div>
            <a href={gitLink} className="projects__btn" target="*_blank"> Code Link <i className="bx bx-right-arrow-alt projects__button-icon"></i></a>
        </div>
        </div>

        <span className="projects__description">
        Technology : {technology} <br/>  Duration : {Duration} Hours
        </span>
   </div>
  );
};

export default ProjectsCard;
