import React from 'react'
import { useState } from 'react'

const ProjectProgressBar = (props) => {
    return (
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-gray-100">

                <div style={{width : `${props.completedPercent}%`}} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${props.pendingPercent <= props.completedPercent ? "bg-gradient-to-l from-blue-400 to-green-400" : "bg-gradient-to-l from-purple-400 via-pink-500 to-red-500"}`}></div>

                <div style={{width : `${Math.max(props.pendingPercent - props.completedPercent, 0)}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-300"></div>
            </div>

            {props.completedPercent !== 100 && 
                <div className="bg-clip-text text-transparent bg-gradient-to-l from-purple-400 via-pink-500 to-red-500 select-none">
                    {props.pendingPercent <= props.completedPercent
                        ? "On track"
                        : "Behind Schedule"
                    }
                </div>
            }

            {props.completedPercent === 100 && 
                <div className="bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400 select-none">
                    Completed
                </div>
            }

        </div>
    )
}

export default ProjectProgressBar

ProjectProgressBar.defaultProps = {
    completedPercent: 50,
    pendingPercent: 100,
}