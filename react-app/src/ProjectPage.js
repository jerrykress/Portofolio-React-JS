import React from 'react'

import './index.css';
import './App.css';

import Header from './components/Header'
import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import TodayView from './components/TodayView'
import CompletedView from './components/CompletedTasksView'

function ProjectPage({tasks, setTasks, projects, setProjects}) {
    return (
        <div>
        <header>
          <TaskList tasks={tasks} projects={projects} setTasks={setTasks}/> 
        </header>
      </div>
    )
}

export default ProjectPage;
