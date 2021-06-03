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
import ProjectWarningModal from './components/project_components/ProjectWarningModal'

function ProjectPage({accountId, tasks, setTasks, projects, setProjects, forceRefreshTasks, refreshInfo}) {
    const [featuredAttr, setFeaturedAttr] = useState(0)
    /*
      0 - value
      1 - date
      2 - Abbr
      3 - Progress
    */
    const [modalTask, setModalTask] = useState(tasks[0])
    const [modalProject, setModalProject] = useState(projects[0])
    const [detailModalPresented, setDetailModalPresented] = useState(false)
    const [warningModalPresented, setWarningModalPresented] = useState(false)

    const invokeModal = (item, type) => {
      if(type === 1){
        invokeDetailModal(item) // project item
      }
      if(type === 2){
        invokeWarningModal(item) //task item
      }
    }

    const invokeDetailModal = (p) => {
      console.log("Showing task modal for task", p.id, p.name)
      setModalProject(p)
      setDetailModalPresented(true)
    }

    const invokeWarningModal = (t) => {
      console.log("Asking if the task is to be dropped from the project", t.id)
      setModalTask(t)
      setWarningModalPresented(true)
    }


    return (
      <div>
        
        {warningModalPresented &&
          <div>
            <ProjectWarningModal setModalPresented={setWarningModalPresented} modalTask={modalTask} forceRefresh={forceRefreshTasks}/>
          </div>
        }


        {detailModalPresented &&
          <div>
            <ProjectDetailModal tasks={tasks} projects={projects} setTasks={setTasks} modalProject={modalProject} setModalPresented={setDetailModalPresented} forceRefreshTasks={forceRefreshTasks} invokeModal={invokeModal}/>
          </div>
        }

        <AddProjectForm accountId={accountId} globalProjects={projects} setProjects={setProjects} refreshInfo={refreshInfo}/>

        <div className="flex mt-10 mx-12 justify-between">
          <p className="text-gray-700 text-3xl mx-4 mb-6">All Projects</p>
          <div className="flex gap-3 mr-2 z-30">
            <SelectFeaturedAttrBtn setFeaturedAttr={setFeaturedAttr} />
            <SortTaskButton tasks={tasks} setTasks={setTasks} buttonText="Sort Tasks"/>
            <SortProjectButton projects={projects} setProjects={setProjects} />      
          </div>
        </div>
        
        <ProjectList tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} featuredAttr={featuredAttr} setFeaturedAttr={setFeaturedAttr} invokeModal={invokeModal} setModalPresented={setDetailModalPresented} forceRefreshTasks={forceRefreshTasks}/>
        
      </div>
    )
}

export default ProjectPage;
