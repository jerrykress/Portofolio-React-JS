import React from 'react'
import RestoreButton from './task_components/TaskRestoreButton'

const CompletedItem = (props) => {
    
    return (
        <div className={`font-sans flex flex-wrap content-between h-auto m-4 bg-white border-2 border-gray-300 hover:border-gray-400 transition-colors duration-1000 p-6 rounded-md tracking-wide shadow-lg`} onDoubleClick={()=>props.onToggle(props.item.id)} >
            <div className="w-full">

                <h3 className="text-l font-semibold subpixel-antialiased text-gray-400" key={props.item.id}>{props.item.text}</h3>
                <p className="text-xs italic text-gray-400 mt-2">{props.item.day}</p>
            </div>

            <div className="mt-3 align-baseline -mb-2">
                <RestoreButton onClick={props.onRestore} text="Restore" item={props.item}/>
            </div>
        </div>
    )
}

export default CompletedItem
