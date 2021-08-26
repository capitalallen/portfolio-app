import React, { Component } from 'react';
import TaskList from './TaskList';
import Divider from "@material-ui/core/Divider";
const TimeSegment = (props)=>{
    return (
    <div>
        <Divider/>
      <h2>Month of {props.time}</h2>
      <h3>{props.title}</h3>
      {props.items.map((item) => <TaskList title={item.title} details={item.details}/>)}
      <Divider/>
    </div>
    )
}


export default TimeSegment; 