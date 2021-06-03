import React from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Task } from './../models';

import ProjectItem from './project_components/ProjectItem'

const ProjectList = (props) => {
    async function completeTask(id) {
        console.log('toggle complete', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, completed: !task.completed} : task))
        // save to datastore
        const temp = props.tasks.filter(task => task.id === id)
        if(temp.length === 0){
            console.log("Unknown Error 2, datastore task target not found.")
            return
        }
        const targetObject = temp[0]
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Task.copyOf(targetObject, item => {
            // Update the values on {item} variable to update DataStore entry
            item.completed = true
        }))
        // refresh
        props.refreshInfo()
    }

    return (
        <div className="mx-10">
            
            { props.projects.length !== 0 
                ?
                props.projects.map(project => (
                <ProjectItem key={project.id} item={project} tasks={props.tasks} featuredAttr={props.featuredAttr} setFeaturedAttr={props.setFeaturedAttr} invokeModal={props.invokeModal} completeTask={completeTask} forceRefreshTasks={props.forceRefreshTasks}/>))
                :
                <EmptyProjectListGraph />
            }
        </div>
    )
}

export default ProjectList

const EmptyProjectListGraph = () => {
    return (
        <div className="mx-4 my-8 px-5 py-7 items-center justify-center rounded-lg border-dashed border-2 text-md text-gray-400">
            <div className="w-full flex justify-center">
                <svg className="w-20 h-20 m-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="my-5 w-full text-center">You don't have a project yet. Create a project to begin.</div>
        </div>
    )
}
