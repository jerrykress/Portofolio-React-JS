import { useState } from 'react'
import './index.css';
import './App.css';

import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import Nav from './components/Nav'

function App() {
  // global state
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Meeting with team',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
      {
          id: 2,
          text: 'Go to the shop',
          day: 'Feb 6th at 4:30pm',
          reminder: false,
      },
      {
          id: 3,
          text: 'A very long session with team',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
      {
          id: 4,
          text: 'Meeting with team',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
      {
          id: 5,
          text: 'Meeting with team',
          day: 'Feb 5th at 2:30pm',
          reminder: false,
      },
  ])

  return (
    <div>
      <header>
        <Nav />
        <Header/>
        <AddTaskForm globalTasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks}/> 
      </header>
    </div>
  );
}

export default App;
