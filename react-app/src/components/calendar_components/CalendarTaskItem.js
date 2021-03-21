import React from 'react'

const CalendarTaskItem = (props) => {
    const levelColors = ["green", "yellow", "red"]

    return (
        <div className="flex inline-flex z-50 items-center select-none mb-1 w-full bg-gray-100 px-1 rounded transition-colors duration-500 hover:bg-gray-200">
            <div class={`inline-flex items-center w-1 h-3 mr-1 bg-${levelColors[props.item.priority]}-600 rounded-full`}></div>
            <div className="narrow-cal-item text-gray-700">{props.item.text}</div>
        </div>
    )
}

export default CalendarTaskItem
