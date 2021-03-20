import React from 'react'
import { useState } from 'react'

const ModalRenameButton = (props) => {
    const toggleActive = () => {
        props.setIsActive(true)
    }

    const toggleSave = () => {
        props.setIsActive(false)
    }

    return (
        <button className="px-2 p-2 rounded-full text-gray-400 bg-gray-100 border-gray-300 text-white hover:bg-gray-200 hover:text-gray-500 focus:outline-none" onClick={props.isActive ? toggleSave : toggleActive}>
            {props.isActive
                ?
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                : 
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            }
        </button>
    )
}

export default ModalRenameButton
