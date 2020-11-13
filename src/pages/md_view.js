import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
// import termsFrPath from './projects.md';
import ReactDOM from 'react-dom';

class md_view extends React.Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }

  componentWillMount() {
    //termsFrPath
    fetch(this.props.termsFrPath)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    );
  }
}

export default md_view;
