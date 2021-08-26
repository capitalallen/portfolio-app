import React, { Component } from 'react';
import DocView from './doc_view';
export default class ProjectDetailHelper extends Component {
  render() {
    return (
      <div>
        {/* <h2 className="colorlib-heading">Projects</h2>
        <h3>Demo</h3>
        <h3>Github Link</h3> */}
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <h2 className="colorlib-heading">Projects</h2>
                <h3 className="heading-meta">Github Link</h3>
                <h3 className="heading-meta">Demo Link</h3>
                <h3>Project Detail</h3>
              </div>
            </div>
          </div>
          <div style={{ height: '100%' }}>
            <DocView />
          </div>
        </section>
      </div>
    );
  }
}
