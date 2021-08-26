import React, { Component } from "react";
import content from "../../content/note-content.json";
import NoteDescription from "./NoteDescription";
const NoteSubject = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.items.map((item) => {
        return (
          <div>
            <h4>{item.name}</h4>
            {item.image ? <image src={item.image} /> : null}
            <NoteDescription link={item.link} description={item.description}/>
          </div>
        );
      })}
    </div>
  );
};

export default NoteSubject;