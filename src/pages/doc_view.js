import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DocView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var url = 'http://localhost:3000/test.pdf';
    return <iframe style={{ width: '100%', height: 800 }} src={url}></iframe>;
  }
}

export default DocView;
