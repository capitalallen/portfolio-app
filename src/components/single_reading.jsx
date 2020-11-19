import React, { Component } from 'react';
export default class single_reading extends Component {
  constructor(props) {
    super(props);
  }
  read_url = "http://localhost:3000/readlist"
  render() {
    var read_url = "http://localhost:3000/readlist";
    var lists = [];
    var proj_lists = [
      ["Machine Learning A Probabilistic Perspective",
       "https://storage.googleapis.com/resources-all/ml_books.jpg",
      ],
      ["Cracking the Coding Interview",
       "https://storage.googleapis.com/resources-all/coding.jpg"
      ],
      ["How Google Works",
       "https://storage.googleapis.com/resources-all/google.jpg"
      ],
  ];
    for (var i = 0; i < 3; i++) {
      lists.push(
        <div className="col-md-4 col-sm-6">
          <div className="blog-entry">
            <a href={read_url} className="blog-img">
              <img
                src={proj_lists[i][1]}
                className="img-responsive"
                alt="HTML5 Bootstrap Template by colorlib.com"
              />
            </a>
            <div className="desc">
              {/* <span>
                <small>April 14, 2018 </small> | <small> Web Design </small> |{' '}
                <small>
                  {' '}
                  <i className="icon-bubble3" /> 4
                </small>
              </span> */}
              <h3>
                <a href={read_url}>{proj_lists[i][0]}</a>
              </h3>
              {/* <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p> */}
            </div>
          </div>
        </div>
      );
    }
    return <div className="row">{lists}</div>;
  }
}
