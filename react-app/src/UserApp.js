import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css';
import './App.css';

import Nav from './components/Nav'
import TaskPage from './TaskPage'

function UserApp({tasks, setTasks, projects, setProjects}) {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/home/tasks" render={(props) => (<TaskPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)} />
        </Switch>
      </Router>
    )
}

export default UserApp
