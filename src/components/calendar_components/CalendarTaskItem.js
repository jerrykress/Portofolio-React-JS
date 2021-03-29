import React from 'react'

const CalendarTaskItem = (props) => {
    const levelColors = ["green", "yellow", "red"]

    return (
        <div className={`flex inline-flex z-50 items-center select-none mb-1 w-full pl-0 rounded transition-colors duration-500 hover:bg-gray-100 ${props.item.completed && "opacity-40 line-through"}`}>
            <div className={`inline-flex items-center w-1 h-3 mr-1 bg-${levelColors[props.item.priority]}-600 rounded-full`}></div>
            <div className="narrow-cal-item text-gray-600 truncate">{props.item.text}</div>
        </div>
    )
}

export default CalendarTaskItem
