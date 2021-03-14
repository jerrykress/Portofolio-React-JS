import React from 'react'
import moment from 'moment'

import ProjectItem from './ProjectItem'

const ProjectList = (props) => {
    return (
        <div className="m-10">
            {props.projects.map(project => (
                <ProjectItem key={project.id} item={project} tasks={props.tasks}/>
            ))}
        </div>
    )
}

export default ProjectList
