import React from 'react'
import moment from 'moment'

import ProjectItem from './project_components/ProjectItem'

const ProjectList = (props) => {
    return (
        <div className="mx-10">
            {props.projects.map(project => (
                <ProjectItem key={project.id} item={project} tasks={props.tasks} featuredAttr={props.featuredAttr} setFeaturedAttr={props.setFeaturedAttr}/>
            ))}
        </div>
    )
}

export default ProjectList
