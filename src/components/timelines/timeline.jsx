import React, { Component } from "react";
import { SingleEvent } from "./event";
import content from "../../content/timeline-content.json";
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
                  {content.map(function (event) {
                    return (
                      <SingleEvent
                        title={event.title}
                        year={event.time}
                        detail={event.detail}
                        color={event.color}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
