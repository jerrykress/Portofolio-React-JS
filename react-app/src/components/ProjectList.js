import React from 'react'
import { useState } from 'react'

import ProjectItem from './project_components/ProjectItem'

const ProjectList = (props) => {
    return (
        <div className="mx-10">
            {props.tasks.filter(x => x.project===1).length!==0 &&
                <DefaultProject tasks={props.tasks} forceRefreshTasks={props.forceRefreshTasks}/>
            }
            
            {props.projects.filter(x=>x.id!==1).map(project => (
                <ProjectItem key={project.id} item={project} tasks={props.tasks} featuredAttr={props.featuredAttr} setFeaturedAttr={props.setFeaturedAttr} invokeModal={props.invokeModal} forceRefreshTasks={props.forceRefreshTasks}/>
            ))}
        </div>
    )
}

export default ProjectList


const DefaultProject = (props) => {
    const levelColors = ["green", "yellow", "red"]
    const [hovered, setHovered] = useState(false)

    const completeTask = (t) => {
        t.completed = true
        props.forceRefreshTasks()
    }
    return (
        <div className="flex flex-wrap relative content-between h-auto m-4 mb-6 bg-white border-dashed border-2 border-gray-300 transition-colors duration-1000 p-6 rounded-md">
            <h3 className="text-gray-300 text-3xl mb-4">Default Project</h3>
            {props.tasks.filter(x => x.project===1).map(task=>
                <div className={`flex items-center justify-between truncate select-none mb-1 w-full px-2 py-1 rounded-full transition-colors duration-500 hover:bg-gray-100 ${task.completed && "opacity-40 line-through"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

                    <div className="flex items-center">
                        <div className={`w-1 h-4 mt-0 mr-2 bg-${levelColors[task.priority]}-600 rounded-full`}></div>
                        <div className="items-center text-gray-600 truncate">{task.text}</div>
                        {hovered && <CompleteTaskBtn onClick={completeTask} task={task} />}
                    </div>

                    <div className="flex items-center ml-3">
                       {/* placeholder */}
                    </div>

                </div>
            )}
        </div>
    )
}


const CompleteTaskBtn = (props) => {
    return (
        <button className={`inline-flex items-center justify-center ml-2 transition-colors duration-300  opacity-50 ${props.task.completed && "pointer-events-none"} focus:outline-none text-gray-400 hover:opacity-100 hover:text-green-500`}
        onClick={() => props.onClick(props.task)}>
            
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

        </button>
    )
}