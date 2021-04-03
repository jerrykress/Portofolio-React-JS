import React from 'react'
import { useState } from 'react'

const ProjectTaskItem = (props) => {
    const levelColors = ["green", "yellow", "red"]
    const [hovered, setHovered] = useState(false)

    const disOwnTask = (t) => {
        props.invokeModal(t, 2)
    }

    const completeTask = (t) => {
        props.item.completed = true
        props.forceRefreshTasks()
    }

    return (
        <div className={`flex items-center justify-between truncate select-none mb-1 w-full px-2 py-1 rounded-full transition-colors duration-500 hover:bg-gray-100 ${props.item.completed && "opacity-40 line-through"}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            <div className="flex items-center">
                <div className={`w-1 h-4 mt-0 mr-2 bg-${levelColors[props.item.priority]}-600 rounded-full`}></div>
                <div className="items-center text-gray-600 truncate">{props.item.title}</div>
                {props.showCompleteBtn && hovered && <CompleteTaskBtn onClick={completeTask} task={props.item} />}
            </div>

            <div className="flex items-center ml-3">
                {props.showDisownBtn && hovered && <DisOwnTaskBtn onClick={disOwnTask} task={props.item}/>}
                {props.showWeight &&
                    <div className="items-center text-gray-600 truncate mr-3">Weight: {props.item.weight}</div>
                }
                {props.showValue &&
                    <div className="items-center text-gray-600 truncate">Value: {props.parentProject.value * props.item.weight}</div>
                }
            </div>


        </div>
    )
}

export default ProjectTaskItem

ProjectTaskItem.defaultProps = { 
    showWeight: true,
    showValue: true, 
    showDisownBtn: false,
    showCompleteBtn: false,
}

const DisOwnTaskBtn = (props) => {
    return (
        <button className={`inline-flex items-center justify-center ml-1 transition-colors duration-300  opacity-50 focus:outline-none text-gray-400 hover:opacity-100 hover:text-red-500`}
        onClick={() => props.onClick(props.task)}>
            
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

        </button>
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