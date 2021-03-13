import { useState } from 'react'
import './index.css';
import './App.css';

import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import Nav from './components/Nav'
import TodayView from './components/TodayView'
import CompletedView from './components/CompletedTasksView'

function App() {
  // global state
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Meeting with team 1',
          day: [2017, 11, 23, 7, 0],
          reminder: false,
          priority: 0,
          completed: false
      },
      {
          id: 2,
          text: 'Go to the shop 2',
          day: [2017, 1, 20, 7, 0],
          reminder: false,
          priority: 1,
          completed: false
      },
      {
          id: 3,
          text: 'A very long session with team 3',
          day: [2017, 10, 10, 7, 0],
          reminder: false,
          priority: 0,
          completed: false
      },
      {
          id: 4,
          text: 'Meeting with team 4',
          day: [2017, 10, 10, 14, 0],
          reminder: false,
          priority: 2,
          completed: false
      },
      {
          id: 5,
          text: 'Meeting with team 5',
          day: [2017, 1, 2, 3, 0],
          reminder: false,
          priority: 2,
          completed: false
      },
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      abbr: 'ECS',
      name: 'Cyber Security',
      color: 'red'
    },
    {
      id: 2,
      abbr: 'IDSS',
      name: 'Data Science',
      color: 'yellow'
    },
    {
      id: 3,
      abbr: 'ML',
      name: 'Machine Learning',
      color: 'blue'
    },
  ])

  return (
    <div>
      <header>
        <Nav />
        <Header/>
        <AddTaskForm globalTasks={tasks} setTasks={setTasks} projects={projects}/>
        <TodayView tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks}/> 
        <CompletedView tasks={tasks} setTasks={setTasks}/> 
      </header>
    </div>
  );
}

export default App;
