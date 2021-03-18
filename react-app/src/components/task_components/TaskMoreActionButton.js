import React from 'react'

const TaskMoreActionButton = (props) => {
    return (
        <button className={`inline-flex items-center justify-center w-10 h-10 mr-0 mt-3 transition-colors duration-300 bg-white rounded-full focus:outline-none text-gray-400 hover:bg-gray-200 hover:text-yellow-500`}
        onClick={props.onClick}>
            
            <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>

        </button>
    )
}

export default TaskMoreActionButton
