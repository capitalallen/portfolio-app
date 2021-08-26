import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
const ProjectSingle = (props) => {
  return (
    <div>
        <Divider/>
      <h2>{props.title}</h2>
      {props.image ? (
        <img src={props.image} style={{ maxHeight: 150 }} />
      ) : null}
      <ul>
        {props.link ? (
          <li>
            <a>Github Link</a>
          </li>
        ) : null}
        <li>
          Built with <b>{props.techStack}</b>
        </li>
      </ul>
      {props.description.map((item) => {
        return (
          <ul>
            <li>{item.content}</li>
            {item.detail ? (
              <ul>
                {item.detail.map((element) => (
                  <li>{element}</li>
                ))}
              </ul>
            ) : null}
          </ul>
        );
      })}
    </div>
  );
};

export default ProjectSingle;
