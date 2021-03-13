import React from 'react'
import { useState } from 'react'

const TaskProjectButton = (props) => {
    const [showDrop, setShowDrop] = useState(false)
    const [selectedProject, setSelectedProject] = useState('')

    const showDropdown = () => {
        setShowDrop(true)
    }

    const hideDropdown = () => {
        setShowDrop(false)
    }

    const setProjectHandler = (p) => {
        console.log("Setting task project:", p.name)
        setSelectedProject(p.abbr)
        props.setTaskProject(p.id)
    }

    return (
        <div className="relative" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
            <button className="inline-flex py-4 px-4 mb-3 w-full items-center justify-center w-12 h-12 mr-2 text-pink-700 transition-colors duration-150 bg-pink-100 rounded-md border border-red focus:outline-none hover:border-pink-800">
                {
                    selectedProject === ''
                        ? <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        : selectedProject
                }
                
            </button>

            {showDrop &&
                <div className="absolute flex flex-col w-full py-2 mt-0 text-gray-700 bg-white border rounded-lg shadow-lg">
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
