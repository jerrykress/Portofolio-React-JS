import React from 'react'

import './index.css';
import './App.css';

import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import TodayView from './components/TodayView'
import CompletedView from './components/CompletedTasksView'

function TaskPage({tasks, setTasks, projects, setProjects}) {
    return (
        <div>
        <header>
          <AddTaskForm globalTasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>
          <TodayView tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} projects={projects} setTasks={setTasks}/> 
          <CompletedView tasks={tasks} setTasks={setTasks}/> 
        </header>
      </div>
    )
}

export default TaskPage;
