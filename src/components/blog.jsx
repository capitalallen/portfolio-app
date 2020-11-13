import React, { Component } from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import SingleReading from './single_reading';
export default class Blog extends Component {
  linkTarget = {
    pathname: '/readlist',
    key: uuid(), // we could use Math.random, but that's not guaranteed unique.
    state: {
      applied: true,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3],
    };
  }
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 ">
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading">READING LIST</h2>
              </div>
            </div>
            <SingleReading data={this.state.data} />
            <div className="row">
              <div className="col-md-12">
                <p>
                  <Link
                    className="btn btn-primary btn-lg btn-load-more"
                    to={this.linkTarget}
                  >
                    Load more <i className="icon-reload" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
