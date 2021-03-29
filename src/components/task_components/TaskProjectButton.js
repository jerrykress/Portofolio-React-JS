import React from 'react'
import { useState } from 'react'

const TaskProjectButton = (props) => {
    const [showDrop, setShowDrop] = useState(false)
    const [selectedProject, setSelectedProject] = useState('Default')

    const showDropdown = () => {
        setShowDrop(true)
    }

    const hideDropdown = () => {
        setShowDrop(false)
    }

    const setProjectHandler = (p) => {
        console.log("Setting task project:", p.name)
        setSelectedProject(p.name)
        props.setTaskProject(p.id)
        hideDropdown()
    }

    return (
        <div className="relative" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
            <button className={`inline-flex py-4 px-4 mb-3 w-full items-center w-12 h-12 mr-2  transition-colors duration-150 rounded-md border border-red focus:outline-none hover:border-pink-800 ${(selectedProject==='Default') && "text-gray-400"}`}>
                {
                    selectedProject
                }
                
            </button>

            {showDrop &&
                <div className="absolute flex flex-col overflow-y-auto w-full max-h-52 py-2 mt-0 text-gray-700 bg-white border rounded-lg shadow-lg">
                    {props.projects.length > 0
                        ? props.projects.map( project => (
                            <div key={project.id} className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" onClick={() => setProjectHandler(project)}>{project.name}</div>
                        ))
                        : <div className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" onClick={hideDropdown}>No Project</div>
                    }
                </div>
            }
        </div>
        )
}

export default TaskProjectButton
