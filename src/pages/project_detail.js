import React, { Component } from 'react';
import '../App.css';
import Sidebar from '../components/sidebar';
import ProjectDetailHelper from './project_detail_heper';
class ProjectsOverview extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <ProjectDetailHelper></ProjectDetailHelper>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsOverview;
