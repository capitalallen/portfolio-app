import React, { Component } from "react";


export const Expertise = (props)=>{
    const color = "services "+props.color;
    return (
        <div className="col-md-4 text-center">
        <div className={color}>
          <span className="icon">
            <i className={props.icon} />
          </span>
          <div className="desc">
            <h3>{props.title}</h3>
            <p>
                {props.details}
            </p>
          </div>
        </div>
      </div>
    )
}