import React from 'react'

import './index.css';
import './App.css';

import ProjectList from './components/ProjectList'
import AddProjectForm from './components/AddProjectForm'

function ProjectPage({tasks, setTasks, projects, setProjects}) {
    return (
      <div>
        <header>
          <AddProjectForm globalProjects={projects} setProjects={setProjects}/>
          <ProjectList tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>
        </header>
      </div>
    )
}

export default ProjectPage;


/*
Project:
id
name
abbr
color
start time
end time (target)
participants
importance score
*/