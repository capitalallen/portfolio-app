import React, { Component } from "react";
// import termsFrPath from '../../md_files/projects.md';
// import MdView from '../md_view';
import ProjectSingle from "./ProjectSingle";
import content from "../../content/project-content.json";
export default class ProjectsAll extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading">Projects</h2>
                <h4>
                  <a href="https://github.com/capitalallen/" target="_blank">
                    Github
                  </a>
                </h4>
              </div>
            </div>

            {content.map((item) => (
              <ProjectSingle
                title={item.title}
                image={item.image}
                link={item.link}
                techStack={item.techStack}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
      // <MdView />
    );
  }
}
