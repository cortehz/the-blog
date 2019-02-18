import React, { Component } from "react";
import "./Projects.css";
import projectList from "../../data/projects.json";

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row">
            {projectList.map(project => {
              return (
                <div key={project} className="project shadow-large">
                  <div className="project-image">
                    <img src={project.img} alt="project thumb" />
                  </div>
                  <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a
                      className="project-button"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
