import React, { Component } from "react";
// export const SingleEvent = (props) =>{
//     return (
//         <h1>wefewfwef</h1>
//     )
// }
export function SingleEvent(props) {
  const color = "timeline-icon "+props.color
  return (
    <article className="timeline-entry">
      <div className="timeline-entry-inner">
        <div className={color}>
          <i className="icon-pen2" />
        </div>
        <div className="timeline-label">
          <h2>
            {props.title}
            <span>{props.year}</span>
          </h2>
          <p>{props.detail}</p>
        </div>
      </div>
    </article>
  );
}
