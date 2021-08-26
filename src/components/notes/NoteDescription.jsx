import React, { Component } from 'react';
const NoteDescription = (props) => {
  return (
    <ul>
      <li>
        <a href={props.link} target="_blank">
          Link
        </a>
      </li>
      {props.description.map((desc) => {
        return <li>{desc}</li>;
      })}
    </ul>
  );
};

export default NoteDescription;
