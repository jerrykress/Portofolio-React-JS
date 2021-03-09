import React from 'react'
import { useState } from 'react'

export const TaskPriorityButton = () => {
    const levels = ["Low", "Med", "High"]
    const levelColors = ["green", "yellow", "red"]
    const [level, setLevel] = useState(0)

    const changePriority = () => {
        console.log("Change priority")
        setLevel((level + 1) % 3)
    }

    return (
        <button className={`inline-flex py-4 px-4 mb-3 w-full items-center justify-center w-12 h-12 mr-2 text-${levelColors[level]}-700 transition-colors duration-150 bg-${levelColors[level]}-100 rounded-md border border-${levelColors[level]} focus:outline-none hover:border-${levelColors[level]}-800`} onClick={changePriority}>
            {/* <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd"></path></svg> */}
            {levels[level]}
        </button>
    )
}

export default TaskPriorityButton