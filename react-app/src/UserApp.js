import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css';
import './App.css';

import Nav from './components/Nav'
import TaskPage from './TaskPage'
import ProjectPage from './ProjectPage';
import CalendarPage from './CalendarPage'
import { calendarFormat } from 'moment';

function UserApp({tasks, setTasks, projects, setProjects}) {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/app/tasks" render={(props) => (<TaskPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)} />
          <Route path="/app/projects" render={(props) => (<ProjectPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)} />
          <Route path="/app/calendar" component={CalendarPage}/>
        </Switch>
      </Router>
    )
}

export default UserApp
