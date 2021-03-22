import React from 'react'

const TaskToggleReminderButton = (props) => {
    const toggleReminder = () => {
        props.setReminder(!props.reminder)
    }
    return (
         <button className={`inline-flex py-4 px-4 mb-3 w-full items-center justify-center w-12 h-12 mr-2 text-pink-${props.reminder ? 700 : 300} transition-colors duration-150 bg-pink-100 rounded-md border border-red focus:outline-none hover:border-pink-800`} onClick={toggleReminder}>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>

            <div className="ml-1">
                {props.reminder===true
                    ? "On"
                    : "Off"
                }
            </div>
        </button>
    )
}

export default TaskToggleReminderButton
