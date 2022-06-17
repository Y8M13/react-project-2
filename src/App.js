
import React from 'react';
import './App.css';
import Home from './components/Home.js';
import TaskLog from './components/TaskLog.js';
import TaskForm from './components/TaskForm.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskDetails from './components/TaskDetails.js';




const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/tasklog" exact component={ TaskLog } />
          <Route path="/tasklog/:id" component={ TaskDetails } />
          <Route path="/taskform" component={ TaskForm } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
