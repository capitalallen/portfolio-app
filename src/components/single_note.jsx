import React, { Component } from 'react';
import project_list from '../md_files/project_list';
export default class single_note extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    var lists = [];
    var proj_lists = [
        ["Deep Learning Specialization on Coursera",
         "A series of Neural Network Courses",
         "https://resources.appen.com/wp-content/uploads/2018/03/Recent-Developments-in-Neural-Networks.png",
         ""
        ],
        ["Google Cloud Notes",
         "All the services that Goggle Cluod provides",
         "data:image/png;base64,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",
         ""
        ],
        ["Ethereum",
         "Mechanism of Ethereum Blockchain",
         "data:image/png;base64,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",
         ""
        ],
    ];
    for (var i = 0; i < 3; i++) {
      lists.push(
        <div className="col-md-4">
          <div
            className="project"
            style={{ backgroundImage: 'url('+proj_lists[i][2]+")" }}
          >
            <div className="desc">
              <div className="con">
                <h3>
                  <a href="work.html">{proj_lists[i][0]}</a>
                </h3>
                <span>
                  <h4>{proj_lists[i][1]}</h4>
                </span>
                <p className="icon">
                  <span>
                    <a href={proj_lists[i][3]}>
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
