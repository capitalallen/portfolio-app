import React, { Component } from 'react';
import '../App.css';
import Sidebar from '../components/sidebar';
import ProjectsAll from '../components/projects/ProjectsAll';
class ProjectsOverview extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <ProjectsAll></ProjectsAll>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsOverview;
