import React, { Component } from 'react';
export default class single_reading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var lists = [];
    for (var i = 0; i < this.props.data.length; i++) {
      lists.push(
        <div className="col-md-4 col-sm-6">
          <div className="blog-entry">
            <a href="blog.html" className="blog-img">
              <img
                src="images/blog-1.jpg"
                className="img-responsive"
                alt="HTML5 Bootstrap Template by colorlib.com"
              />
            </a>
            <div className="desc">
              <span>
                <small>April 14, 2018 </small> | <small> Web Design </small> |{' '}
                <small>
                  {' '}
                  <i className="icon-bubble3" /> 4
                </small>
              </span>
              <h3>
                <a href="blog.html">Renovating National Gallery</a>
              </h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{lists}</div>;
  }
}
