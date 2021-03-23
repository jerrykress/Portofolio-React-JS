import React from 'react'

import './index.css';
import './App.css';

import ProjectList from './components/ProjectList'
import AddProjectForm from './components/AddProjectForm'
import SortProjectButton from './components/project_components/SortProjectButton'

function ProjectPage({tasks, setTasks, projects, setProjects}) {
    return (
      <div>
        <AddProjectForm globalProjects={projects} setProjects={setProjects}/>

        <div className="flex mt-10 mx-12 justify-between">
          <p className="text-gray-700 text-3xl">All Projects</p>
          <div className="flex mr-2 z-40">
            <SortProjectButton projects={projects} setProjects={setProjects} />      
          </div>
        </div>
        
        <ProjectList tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>
        
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