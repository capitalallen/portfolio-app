import React, { Component } from 'react';
import project_list from '../md_files/project_list';
export default class single_project extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    var lists = [];
    var proj_lists = [
        ["ML Trading",
         "A cryptocurrency trading project that uses Machine Learning models to trade 4 different cryptocurrencies at the same time.",
         "https://kryptomoney.com/wp-content/uploads/2018/04/KryptoMoney.com-How-To-Become-a-Cryptocurrency-Trader.png",
         ""
        ],
        ["IuvoShare",
         "A mobile App that Leverages Blockchain technology to reward people for sharing ideas and helping others.",
         "https://storage.googleapis.com/resources-all/Screen%20Shot%202020-11-12%20at%2011.36.39%20PM.png",
         "https://play.google.com/store/apps/details?id=com.capitalallen.goodluck"
        ],
        ["CI/CD Pipeline",
         "Fully automated CI/CD pipeline which was built with Gradle, Jenkins, Kubernete and Docker.",
         "https://storage.googleapis.com/resources-all/CI-CD-Pipeline-CI-CD-Pipeline-Edureka.png",
         "https://github.com/capitalallen/cicd-pipeline"
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
