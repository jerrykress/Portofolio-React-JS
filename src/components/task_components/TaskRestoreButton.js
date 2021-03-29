import React from 'react'

const TaskRestoreButton = (props) => {
    return (
        <button className={`inline-flex items-center justify-center w-10 h-10 -ml-2 mr-0 mt-3 transition-colors duration-300 bg-white rounded-full focus:outline-none text-gray-400 hover:bg-gray-200 hover:text-purple-500`}
                onClick={() => props.onClick(props.item.id)}>
            
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        

        </button>
    )
}

export default TaskRestoreButton
