import React from "react";
import'./Projects.css'

import {Data} from './Data/data'
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    // console.log(Data)
  return (
    <section className="projects__container container " id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="projects__container container grid">
            {
                Data.map(projects => <ProjectsCard key={projects.id} projects={projects}></ProjectsCard>)
            }
      </div>
      
      
    </section>
  );
};

export default Projects;
