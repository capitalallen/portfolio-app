import React, { Component } from "react";
import { Link } from "react-router-dom";
import content from "../content/sidebar-content.json";
export default class Sidebar extends Component {
  openUrl(url) {
    console.log("url");
    const win = window.open(url, "_blank");
    if (win != null) {
      win.focus();
    }
  }
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="/" target="_blank">
                  {content.name}
                </a>
              </h1>
              <span className="email">
                <i className="icon-mail">{content.email}</i>
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="3">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a
                      href={content.mylink}
                      target="_blank"
                      data-nav-section="home"
                    >
                      {content.sidebar1}
                    </a>
                  </li>
                  <li>
                    <a href={this.linkTarget} data-nav-section="about">
                      {content.sidebar2}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      target="_blank"
                      data-nav-section="timeline"
                    >
                      {content.sidebar6}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="/projectsoverview" target="_blank">
                      {content.sidebar3}
                    </a>
                  </li>
                  <li>
                    <a href="/readlist" target="_blank">
                      {content.sidebar4}
                    </a>
                  </li>
                  <li>
                    <a href="/notes" target="_blank">
                      {content.sidebar5}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href={content.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href={content.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <a href={process.env.PUBLIC_URL + content.resume} target="_blank">
                View Resume
              </a>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
