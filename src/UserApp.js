import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth, API } from 'aws-amplify';

import './index.css';
import './App.css';

import Nav from './components/Nav'
import TaskPage from './TaskPage'
import ProjectPage from './ProjectPage';
import CalendarPage from './CalendarPage'

import { DataStore } from '@aws-amplify/datastore';
import { Project, Task } from './models';
import { listProjects } from './graphql/customQueries'

function UserApp() {
    useEffect(() => {
      fetchInfo()
    }, [])

    const fetchInfo = async () => {
        const { attributes } = await Auth.currentAuthenticatedUser();
        // console.log(attributes)
        setAccountID(attributes.sub)
        // console.log(attributes.sub)
        const projectData = await DataStore.query(Project);
        // const projectData = await API.graphql({ query: listProjects })
        console.log("Fetching Projects", projectData)
        setProjects(projectData)
        // setProjects(projectData.data.listProjects.items)
        const taskData = await DataStore.query(Task);
        console.log("Fetching Tasks", taskData)
        setTasks(taskData)
    }
    
    const [tasks, setTasks] = useState([])
    const [projects, setProjects] = useState([])
    const [accountID, setAccountID] = useState('')

    const refreshGlobalTasks = () => {
        setTasks([...tasks])
    }

    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/app/tasks" render={(props) => (<TaskPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} refreshInfo={fetchInfo}/>)} />
          <Route path="/app/projects" render={(props) => (<ProjectPage {...props} accountId={accountID} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} forceRefreshTasks={refreshGlobalTasks} refreshInfo={fetchInfo}/>)} />
          <Route path="/app/calendar" render={(props) => (<CalendarPage {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)}/>
        </Switch>
      </Router>
    )
}

export default UserApp
