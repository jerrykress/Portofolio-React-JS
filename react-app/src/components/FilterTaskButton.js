import React from 'react'
import { useState } from 'react'

const FilterTaskButton = (props) => {
    const [showDrop, setShowDrop] = useState(false)
    const [usedFilter, setUsedFilter] = useState('None')

    const showDropdown = () => {
        setShowDrop(true)
    }
    
    const hideDropdown = () => {
        setShowDrop(false)
    }

    const applyFilter = (p) => {
        console.log("Applying filter:", p.abbr)
        props.filterHandler(p)
        setUsedFilter(p.abbr)
        hideDropdown()
    }

    return (
        <div className="relative" onMouseOver={showDropdown} onMouseLeave={hideDropdown}>
            <button className={`inline-flex items-center h-10 px-3 py-4 mb-3 mr-3 text-${(usedFilter==='None' ? 'gray' : 'indigo')}-400 border border-indigo-100 transition-colors duration-150 bg-white rounded-lg focus:outline-none hover:border-indigo-500 hover:text-indigo-700`}>
                <span className="truncate">{`Filter by: ${usedFilter}`}</span>
                <svg className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </button>

            {showDrop &&
                <div className="absolute flex flex-col w-full max-h-52 overflow-y-auto py-2 mt-0 text-gray-700 bg-white border rounded-lg shadow-lg">
                    {
                        props.projects.map(project => (
                            <div key={project.id} className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" onClick={() => applyFilter(project)}>{project.abbr}</div>
                        ))
                    }
                    
                </div>
            }
        </div>
    )
}

export default FilterTaskButton
