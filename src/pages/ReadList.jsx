import React, { Component } from 'react';
import '../App.css';
import Sidebar from '../components/sidebar';
import ReadingListPart from '../components/reading-list/ReadingListPart';
class ReadList extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <ReadingListPart/>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadList;
