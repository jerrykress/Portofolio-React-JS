import React from 'react'
import { useState } from 'react'
import Calendar from './components/Calendar'

function CalendarPage(props) {
  const [cellHeight, setCellHeight] = useState(20)

  const increaseCellHeight = () => {
    if(cellHeight < 40){
      setCellHeight(cellHeight+4)
    }
  }

  const decreaseCellHeight = () => {
    if(cellHeight > 20){
      setCellHeight(cellHeight-4)
    }
  }

  return (
      <div className="p-10">

        <div className="mb-5 text-gray-600 flex items-center justify-center">
          <button className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full focus:outline-none hover:bg-gray-200" onClick={increaseCellHeight}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <div className="text-gray-400 uppercase text-s mx-4">{`Zoom: ${cellHeight}`}</div>

          <button className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full focus:outline-none hover:bg-gray-200" onClick={decreaseCellHeight}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>


        <Calendar tasks={props.tasks} cellHeight={cellHeight}/>
      </div>
  )
}

export default CalendarPage;