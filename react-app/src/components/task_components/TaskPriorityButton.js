import React from 'react'

export const TaskPriorityButton = (props) => {
    const levels = ["Low", "Med", "High"]
    const levelColors = ["green", "yellow", "red"]

    const changePriority = () => {
        console.log("Change priority")
        props.setLevel((props.level + 1) % 3)
    }

    return (
        <button className={`inline-flex py-4 px-4 mb-3 w-full items-center justify-center w-12 h-12 mr-2 text-${levelColors[props.level]}-700 transition-colors duration-150 bg-${levelColors[props.level]}-100 rounded-md border border-${levelColors[props.level]} focus:outline-none hover:border-${levelColors[props.level]}-800`} onClick={changePriority}>
            {levels[props.level]}
        </button>
    )
}

export default TaskPriorityButton