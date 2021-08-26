import React, { Component } from 'react';

const TaskList = (props)=>{
    return (
        <div>
        {props.title.length>0 ? <h4>{props.title}</h4>: null} 
        <ul>
        {props.details.map((detail)=>{
          return (
            <div>
              <li>
                <a href={detail.url} target="_blank">{detail.name}</a>
              </li>
              {detail.image? <img style={{height:150, width:200}} src={detail.image} alt="Image"/>:null}
            </div>
          )
        })}
        </ul>
      </div>
    );
}

export default TaskList