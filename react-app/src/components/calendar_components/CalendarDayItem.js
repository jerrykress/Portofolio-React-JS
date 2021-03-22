import React from 'react'

const CalendarDayItem = (props) => {
    const levelColors = ["green", "yellow", "red"]

    return (
        <div className="{`font-sans flex content-between h-auto mx-4 mb-4 bg-white border-2 border-gray-300 hover:border-gray-500 transition-colors duration-1000 p-4 rounded-md shadow-lg`}">
            <div className={`items-center w-1 mr-1 bg-${levelColors[props.item.priority]}-600 rounded-full`}></div>

            <div className="w-full">
                
                <div className="flex justify-between items-center">
                    <div className="text-gray-700 ml-2 text-xl -mt-1">{props.item.text}</div>
                    <div class="px-3 text-gray-400 uppercase text-sm items-center transition-colors duration-150 border border-gray-300 rounded-full">
                        <div>{props.projects.filter(x => x.id===props.item.project)[0].name}</div>
                    </div>
                </div>

                <div className="text-gray-500 ml-2 text-s items-center">{props.item.notes}</div>
            </div>

        </div>
    )
}

export default CalendarDayItem
