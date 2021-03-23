import React from 'react'
import { useState } from 'react'

const ProjectProgressBar = (props) => {
    return (
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div style={{width : `${props.completedPercent}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-l from-blue-400 to-green-400"></div>
                <div style={{width : `${props.pendingPercent}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-200"></div>
            </div>
        </div>
    )
}

export default ProjectProgressBar

ProjectProgressBar.defaultProps = {
    completedPercent: 30,
    pendingPercent: 60,
}