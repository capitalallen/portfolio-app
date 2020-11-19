import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer at Iuvo rideshare Inc<span>2017-2018</span>
                        </h2>
                        <p>
                          Iuvo rideshare Inc is a company that provides long-distance ridesharing platform. I was responsible for building the mobile application for the platform.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Developer & Co-founder of VpickU<span>2016-2017</span>
                        </h2>
                        <p>
                          VpickU is a startup company which helps International Students to settle down in Canada. I bulit both frontend and backend of the websites to receieve orders from students. I also developed a traffic tracking library to visualize where the traffic comes from.  
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                         Undergraduation at Western University <span>2016-2021</span>
                        </h2>
                        <p>
                          I am pursuing my under-graduation studies with major
                          in Computer Science.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
