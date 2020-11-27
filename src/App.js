import React, { Component } from 'react';
import './App.css';

// import ProjectsOverview from './ProjectsOverview';
import ProjectsOverview from './pages/ProjectsOverview';
import ReadList from './pages/ReadList';
import NoteList from './pages/NoteList';
import Home from './home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/projectsoverview" component={ProjectsOverview} />
          <Route path="/readlist" component={ReadList} />
          <Route path="/notes" component={NoteList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
