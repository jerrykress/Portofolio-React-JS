import React from 'react'

const CalendarDayItem = (props) => {
    const levelColors = ["green", "yellow", "red"]

    const completeTask = (id) => {
        console.log("Complete day item", id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, completed: !task.completed} : task))
    }

    return (
        <div className={`flex content-between h-auto mx-4 mb-4 bg-white border-2 border-gray-300 hover:border-gray-500 transition-colors duration-1000 p-4 rounded-md shadow-md`}>
            <div className={`items-center w-1 mr-1 bg-${levelColors[props.item.priority]}-600 rounded-full`}></div>

            <div className="w-full">
                
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className={`text-gray-700 ml-2 text-xl -mt-1 ${props.item.completed && "opacity-40 line-through"}`}>{props.item.text}</div>
                        <div className="-mt-4">
                            {props.item.completed
                                ? <div></div>
                                : <DayItemCheckButton item={props.item} onClick={completeTask}/> 
                            }
                        </div>
                    </div>
                    
                    <div className="px-3 text-gray-400 uppercase text-sm items-center transition-colors duration-150 border border-gray-300 rounded-full">
                        <div className="truncate">{props.projects.filter(x => x.id===props.item.project)[0].name}</div>
                    </div>
                </div>

                <div className={`text-gray-500 ml-2 text-s items-center ${props.item.completed && "opacity-30 line-through"}`}>{props.item.notes}</div>
            </div>

        </div>
    )
}

export default CalendarDayItem


const DayItemCheckButton = (props) => {
    return (
        <button className={`inline-flex items-center justify-center w-6 h-6 p-1 mr-0 mt-4 ml-2 mr-2 transition-colors duration-300 bg-white rounded-full focus:outline-none text-gray-400 hover:bg-gray-200 hover:text-blue-500`}
                onClick={() => props.onClick(props.item.id)}>
            
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>

        </button>
    )
}