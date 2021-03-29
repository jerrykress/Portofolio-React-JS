import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css';
import './App.css';

import Nav from './components/Nav'
import TaskPage from './TaskPage'
import ProjectPage from './ProjectPage';
import CalendarPage from './CalendarPage'

function UserApp({tasks, setTasks, projects, setProjects}) {
    const refreshGlobalTasks = () => {
        setTasks([...tasks])
    }

    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/app/tasks" render={(props) => (<TaskPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)} />
          <Route path="/app/projects" render={(props) => (<ProjectPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} forceRefreshTasks={refreshGlobalTasks}/>)} />
          <Route path="/app/calendar" render={(props) => (<CalendarPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)}/>
        </Switch>
      </Router>
    )
}

export default UserApp
