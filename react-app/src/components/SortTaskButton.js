import React from 'react'
import { useState } from 'react'

const SortTaskButton = () => {
    const [showDrop, setShowDrop] = useState(false)

    const toggleDropdown = () => {
        setShowDrop(!showDrop)
    }

    return (
        <div className="relative">
            <button className="inline-flex items-center h-10 px-5 text-indigo-700 border border-indigo-300 transition-colors duration-150 bg-white rounded-lg focus:outline-none hover:border-indigo-500" onClick={toggleDropdown}>
                <span>Sort by</span>
                <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </button>

            {showDrop &&
                <div className="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg shadow-lg">
                    <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" href="#">Due First</a>
                    <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" href="#">High Priority</a>
                    <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 hover:text-indigo-700" href="#">Tags</a>
                </div>
            }
        </div>
    )
}

export default SortTaskButton
