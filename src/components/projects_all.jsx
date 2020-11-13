import React, { Component } from 'react';
import termsFrPath from '../md_files/projects.md';
import MdView from '../pages/md_view';
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
              </div>
            </div>

            <MdView termsFrPath={termsFrPath} />
          </div>
        </section>
      </div>
      // <MdView />
    );
  }
}
