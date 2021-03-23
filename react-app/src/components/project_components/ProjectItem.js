import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import ProjectTaskItem from './ProjectTaskItem'

const ProjectItem = (props) => {

    return (
        <div className={`flex flex-wrap relative content-between h-auto m-4 mb-6 bg-white border-2 border-gray-300 hover:border-gray-500 transition-colors duration-1000 p-6 rounded-md tracking-wide shadow-lg`} >
            <div className="w-full">
                    <div className="absolute top-0 right-0 opacity-30 text-9xl font-black bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400 select-none">
                        {props.featuredAttr===0 && props.item.value}
                        {props.featuredAttr===1 && `${moment(props.item.endTime).format('MMM')}.${moment(props.item.endTime).format('DD')}`}
                    </div>
                
                <h3 className="subpixel-antialiased w-full text-grey text-3xl mb-4" key={props.item.id}>{props.item.name}</h3>

                {props.tasks.filter(x => x.project===props.item.id).map(task => (
                    <div key={task.id} className="">
                        <ProjectTaskItem item={task} parentProject={props.item}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectItem
