import React, { Component } from 'react';
import ProjectsOverview from './ProjectsOverview';
import uuid from 'uuid';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SingeNote from '../components/single_note';
export default class Notes extends Component {
  linkTarget = {
    pathname: '/notes',
    key: uuid(), // we could use Math.random, but that's not guaranteed unique.
    state: {
      applied: true,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5, 6],
    };
  }
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <span className="heading-meta">STUDY</span>
                <h2 className="colorlib-heading">Notes</h2>
              </div>
            </div>
            <SingeNote data={this.state.data} />
            <div className="row">
              <div className="col-md-12">
                {/* <Route path="/projectoverview" component={ProjectsAll}> */}
                <p>
                  <Link
                    className="btn btn-primary btn-lg btn-load-more"
                    to={this.linkTarget}
                  >
                    Load more <i className="icon-reload" />
                  </Link>
                </p>
                {/* </Route> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
