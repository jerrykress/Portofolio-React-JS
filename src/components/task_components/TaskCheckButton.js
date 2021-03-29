import React from 'react'

const TaskCheckButton = (props) => {
    return (
        <button className={`inline-flex items-center justify-center w-10 h-10 mr-0 mt-3 transition-colors duration-300 bg-white rounded-full focus:outline-none text-gray-400 hover:bg-gray-200 hover:text-blue-500`}
                onClick={() => props.onClick(props.item.id)}>
            
        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>

        </button>
    )
}

export default TaskCheckButton
