import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css';
import './App.css';

import LoginPage from './LoginPage'
import UserApp from './UserApp'

function App() {
  // User Auth
  const [authToken, setAuthToken] = useState(true)
  // Global State
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Meeting with team 1',
          notes: 'Details of the task is written here',
          day: [2017, 11, 23, 7, 0],
          reminder: false,
          priority: 0,
          completed: false,
          project: 1,
          weight: 0.2,
          participants: [1,2]
      },
      {
          id: 2,
          text: 'Go to the shop 2',
          notes: 'Details of the task is written here',
          day: [2017, 1, 20, 7, 0],
          reminder: false,
          priority: 1,
          completed: false,
          project: 2,
          weight: 0.2,
          participants: [1,2]
      },
      {
          id: 3,
          text: 'A very long session with team 3',
          notes: 'Details of the task is written here',
          day: [2017, 10, 10, 7, 0],
          reminder: false,
          priority: 0,
          completed: false,
          project: 2,
          weight: 0.2,
          participants: [1,2]
      },
      {
          id: 4,
          text: 'Meeting with team 4',
          notes: 'Details of the task is written here',
          day: [2017, 10, 10, 14, 0],
          reminder: false,
          priority: 2,
          completed: false,
          project: 3,
          weight: 0.2,
          participants: [1,2]
      },
      {
          id: 5,
          text: 'Meeting with team 5',
          notes: 'Details of the task is written here',
          day: [2017, 1, 2, 3, 0],
          reminder: false,
          priority: 2,
          completed: false,
          project: 3,
          weight: 0.2,
          participants: [1,2]
      },
      {
          id: 6,
          text: 'Meeting with team 6',
          notes: 'Details of the task is written here',
          day: [2017, 0, 1, 17, 0],
          reminder: false,
          priority: 3,
          completed: false,
          project: 4,
          weight: 0.2,
          participants: [1,2]
      },
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      abbr: 'None',
      name: 'Default',
      color: 'gray',
      startTime: [2017, 1, 2, 3, 0],
      endTime: [2017, 1, 2, 3, 0],
      participants: [1,2],
      value: 10
    },
    {
      id: 2,
      abbr: 'IDSS',
      name: 'Data Science',
      color: 'yellow',
      startTime: [2017, 1, 2, 3, 0],
      endTime: [2017, 1, 2, 3, 0],
      participants: [1,2],
      value: 10
    },
    {
      id: 3,
      abbr: 'ML',
      name: 'Machine Learning',
      color: 'blue',
      startTime: [2017, 1, 2, 3, 0],
      endTime: [2017, 1, 2, 3, 0],
      participants: [1,2],
      value: 10
    },
    {
      id: 4,
      abbr: 'ECS',
      name: 'Cyber Security',
      color: 'red',
      startTime: [2017, 1, 2, 3, 0],
      endTime: [2017, 1, 2, 3, 0],
      participants: [1,2],
      value: 10
    },
  ])

  if(!authToken){
    return <LoginPage />
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/app" render={(props) => (<UserApp {...props} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>)} />
      </Switch>
    </Router>
  );
}

export default App;
