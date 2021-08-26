import React, { Component } from 'react';
import { Expertise } from './expertise';
import content from '../../content/about-content.json';
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'm a M.S. in Computer Engineering student at New York University 
                      </p>
                      <p>
                      I mainly use this website to index personal information about myself, and also as a fun way to track my progress learning life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
            {content.expertise.map( (item)=> {
                    return (
                      <Expertise
                        title={item.title}
                        details={item.details}
                        icon={item.icon}
                        color={item.color}
                      />
                    );
                  })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
