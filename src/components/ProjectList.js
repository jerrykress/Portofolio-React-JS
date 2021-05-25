import React from 'react'

import ProjectItem from './project_components/ProjectItem'

const ProjectList = (props) => {

    return (
        <div className="mx-10">
            
            { props.projects.length !== 0 
                ?
                props.projects.map(project => (
                <ProjectItem key={project.id} item={project} tasks={props.tasks} featuredAttr={props.featuredAttr} setFeaturedAttr={props.setFeaturedAttr} invokeModal={props.invokeModal} forceRefreshTasks={props.forceRefreshTasks}/>))
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
