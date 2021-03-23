import React from 'react'

const ProjectTaskItem = (props) => {
    const levelColors = ["green", "yellow", "red"]

    return (
        <div className={`flex inline-flex items-center justify-between select-none mb-1 w-full px-2 py-1 rounded-full transition-colors duration-500 hover:bg-gray-100 ${props.item.completed && "opacity-40 line-through"}`}>

            <div className="flex items-center">
                <div className={`w-1 h-4 mt-0 mr-2 bg-${levelColors[props.item.priority]}-600 rounded-full`}></div>
                <div className="items-center text-gray-600 truncate">{props.item.text}</div>
            </div>

            <div className="flex items-center">
                <div className="items-center text-gray-600 truncate mr-3">Weight: {props.item.weight}</div>
                <div className="items-center text-gray-600 truncate">Value: {props.parentProject.value * props.item.weight}</div>
            </div>


        </div>
    )
}

export default ProjectTaskItem
