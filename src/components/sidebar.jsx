import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import uuid from 'uuid';
export default class Sidebar extends Component {
  mylink = "https://ace-resolver-237602.uc.r.appspot.com/";
  linkTarget = {
    pathname: '/',
    key: uuid(), // we could use Math.random, but that's not guaranteed unique.
    state: {
      applied: true,
    },
  };
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
                style={{ backgroundImage: 'url(images/about.jpg)' }}
              />
              <h1 id="colorlib-logo">
                <a href={this.mylink} target="_blank">Allen(Zeyu) Zhang</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> zzhan785@uwo.ca
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    {/* <Link to={this.linkTarget} data-nav-section="home">
                      Introduction
                    </Link> */}
                    <a href={this.mylink} target="_blank" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    {/* <Link to={this.linkTarget} data-nav-section="about">
                      About
                    </Link> */}
                    <a href={this.mylink} target="_blank" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    {/* <Link to={this.linkTarget} data-nav-section="projects">
                      Projects
                    </Link> */}
                    <a href={this.mylink} target="_blank" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    {/* <Link to={this.linkTarget} data-nav-section="blog">
                      Reading List
                    </Link> */}
                    <a href={this.mylink} target="_blank" data-nav-section="blog">
                      Reading List
                    </a>
                  </li>
                  <li>
                    {/* <Link to={this.linkTarget} data-nav-section="service">
                      Notes
                    </Link> */}
                    <a href={this.mylink} target="_blank" data-nav-section="service">
                      Notes
                    </a>
                  </li>
                  <li>
                    {/* <Link to={this.linkTarget} data-nav-section="timeline">
                      Timeline
                    </Link> */}
                    <a href={this.mylink} target="_blank" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zeyuzhang-/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/capitalallen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              {/* <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{' '}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                  Thanks{' '}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{' '}
                  for inspiration
                </small>
              </p>
              <p>
                <small>Something coming soon !!</small>
              </p> */}
              <a
                href={this.mylink +"resume.pdf"}
                target="_blank"
              >
                View Resume
              </a>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
