import React, { Component } from 'react';
export default class single_project extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var lists = [];
    for (var i = 0; i < this.props.data.length; i++) {
      lists.push(
        <div className="col-md-4">
          <div
            className="project"
            style={{ backgroundImage: 'url(../images/img-5.jpg)' }}
          >
            <div className="desc">
              <div className="con">
                <h3>
                  <a href="work.html">Work 1</a>
                </h3>
                <span>
                  <h4>Graphic, Logo</h4>
                </span>
                <p className="icon">
                  <span>
                    <a href="#">
                      <i className="icon-share3" />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{lists}</div>;
  }
}
