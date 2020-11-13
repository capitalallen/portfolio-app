import React, { Component } from 'react';
import '../App.css';
import Sidebar from '../components/sidebar';
import NoteListPart from '../components/note_list';
class NoteList extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <NoteListPart></NoteListPart>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
