import React, { Component } from 'react';
import content from '../content/intro-content.json';
export default class Introduction extends Component {
  cv_link = process.env.PUBLIC_URL + content.resume;
  proj_link = content.proj_link;
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            {content.hi} <br />
                            {content.name}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={this.cv_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            {content.quote}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={this.proj_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
