import React from 'react'
import { useState } from 'react'
import moment from 'moment'

import ProjectTaskItem from './ProjectTaskItem'
import MoreInfoButton from './ProjectMoreInfoBtn'

const ProjectItem = (props) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div className={`flex flex-wrap relative content-between h-auto m-4 mb-6 bg-white border-2 border-gray-300 hover:border-gray-500 transition-colors duration-1000 p-6 rounded-md tracking-wide shadow-lg`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onDoubleClick={() => props.invokeModal(props.item, 1)}>
            <div className="w-full">
                <div className="absolute top-0 right-0 opacity-30 text-9xl font-black bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400 select-none">
                    {props.featuredAttr===0 && props.item.value}
                    {props.featuredAttr===1 && `${moment(props.item.endTime).format('MMM')}.${moment(props.item.endTime).format('DD')}`}
                    {props.featuredAttr===2 && props.item.abbr}
                    {props.featuredAttr===3 && `${Math.round(props.tasks.filter(x => x.project===props.item.id && !x.completed).map(x => x.weight).reduce((a, b) => a + b, 0) * (-100) + 100)}%`}
                </div>
                
                <h3 className="relative flex items-center gap-3 subpixel-antialiased w-full text-grey text-3xl mb-4" key={props.item.id}>
                    <div>{props.item.name}</div>

                    {hovered &&
                        <MoreInfoButton onClick={() => props.invokeModal(props.item, 1)}/>
                    }
                </h3>

                {props.tasks.filter(x => x.project===props.item.id).length!==0
                    ? props.tasks.filter(x => x.project===props.item.id).map(task => (
                      <div key={task.id} className="">
                        <ProjectTaskItem item={task} parentProject={props.item} showCompleteBtn={true} forceRefreshTasks={props.forceRefreshTasks}/>
                      </div> ))
                    : <div className="text-gray-400">This project has no task</div>
                }
            </div>

        </div>
    )
}

export default ProjectItem
