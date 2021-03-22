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
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          day: [2021, 2, 23, 7, 0],
          reminder: false,
          priority: 0,
          completed: false,
          project: 1,
          weight: 0.5,
          participants: [1,2]
      },
      {
          id: 2,
          text: 'Assessed Lab Exercise',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          day: [2021, 2, 20, 7, 0],
          reminder: false,
          priority: 1,
          completed: false,
          project: 2,
          weight: 0.7,
          participants: [1,2]
      },
      {
          id: 3,
          text: 'Read lecture material',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          day: [2021, 2, 10, 7, 0],
          reminder: false,
          priority: 0,
          completed: false,
          project: 2,
          weight: 0.1,
          participants: [1,2]
      },
      {
          id: 4,
          text: 'Worksheet Exercises',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          day: [2021, 2, 10, 14, 0],
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
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          day: [2021, 2, 2, 3, 0],
          reminder: false,
          priority: 2,
          completed: false,
          project: 3,
          weight: 0.2,
          participants: [1,2]
      },
      {
          id: 6,
          text: 'Group essay final draft',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          day: [2021, 2, 1, 17, 0],
          reminder: false,
          priority: 1,
          completed: false,
          project: 4,
          weight: 0.8,
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
