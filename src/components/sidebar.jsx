import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import uuid from 'uuid';
export default class Sidebar extends Component {
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
                <a href="index.html">Dhruv Barochiya</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> dhruv.barochia34788@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <Link to={this.linkTarget} data-nav-section="home">
                      Introduction
                    </Link>
                    {/* <a href="#home" data-nav-section="home">
                      Introduction
                    </a> */}
                  </li>
                  <li>
                    <Link to={this.linkTarget} data-nav-section="about">
                      About
                    </Link>
                    {/* <a href="#about" data-nav-section="about">
                      About
                    </a> */}
                  </li>
                  <li>
                    <Link to={this.linkTarget} data-nav-section="projects">
                      Projects
                    </Link>
                    {/* <a href="#projects" data-nav-section="projects">
                      Projects
                    </a> */}
                  </li>
                  <li>
                    <Link to={this.linkTarget} data-nav-section="blog">
                      Reading List
                    </Link>
                    {/* <a href="#" data-nav-section="blog">
                      Reading List
                    </a> */}
                  </li>
                  <li>
                    <Link to={this.linkTarget} data-nav-section="service">
                      Notes
                    </Link>
                    {/* <a href="#" data-nav-section="service">
                      Notes
                    </a> */}
                  </li>
                  <li>
                    <Link to={this.linkTarget} data-nav-section="timeline">
                      Timeline
                    </Link>
                    {/* <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a> */}
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/dhruv.barochia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ddbarochiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ddbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/dbarochiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@dhruv.barochia34788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-blogger2"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
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
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
