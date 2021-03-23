import React from 'react'
import { useState } from 'react'

import './index.css';
import './App.css';

import ProjectList from './components/ProjectList'
import AddProjectForm from './components/AddProjectForm'
import SortProjectButton from './components/project_components/SortProjectButton'
import SortTaskButton from './components/task_components/SortTaskButton'
import SelectFeaturedAttrBtn from './components/project_components/SelectFeaturedAttrBtn'

import ProjectDetailModal from './components/project_components/ProjectDetailModal'

function ProjectPage({tasks, setTasks, projects, setProjects}) {
    const [featuredAttr, setFeaturedAttr] = useState(0)
    /*
      0 - value
      1 - date
      2 - Abbr
      3 - Progress
    */
    const [modalPresented, setModalPresented] = useState(false)
    const [modalProject, setModalProject] = useState(projects[0])

    const invokeModal = (p, type) => {
      if(type === 1){
        invokeDetailModal(p)
      }
    }

    const invokeDetailModal = (p) => {
      console.log("Showing task modal for task", p.id, p.name)
      setModalProject(p)
      setModalPresented(true)
    }


    return (
      <div>

        {modalPresented &&
          <div>
            <ProjectDetailModal modalProject={modalProject} setModalPresented={setModalPresented}/>
          </div>

        }

        <AddProjectForm globalProjects={projects} setProjects={setProjects}/>

        <div className="flex mt-10 mx-12 justify-between">
          <p className="text-gray-700 text-3xl">All Projects</p>
          <div className="flex gap-3 mr-2 z-30">
            <SelectFeaturedAttrBtn setFeaturedAttr={setFeaturedAttr} />
            <SortTaskButton tasks={tasks} setTasks={setTasks} buttonText="Sort Tasks"/>
            <SortProjectButton projects={projects} setProjects={setProjects} />      
          </div>
        </div>
        
        <ProjectList tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} featuredAttr={featuredAttr} setFeaturedAttr={setFeaturedAttr} invokeModal={invokeModal} setModalPresented={setModalPresented}/>
        
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