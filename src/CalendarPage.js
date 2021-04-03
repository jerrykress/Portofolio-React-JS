import React from 'react'
import moment from 'moment'
import { useState } from 'react'

import Calendar from './components/Calendar'
import DayItem from './components/calendar_components/CalendarDayItem'

function CalendarPage({tasks, setTasks, projects, setProjects}) {
  const [currentMonth, setCurrentMonth] = useState(moment())
  const [selectedDate, setSelectedDate] = useState(moment())

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

  const selectToday = () => {
    setSelectedDate(moment())
    setCurrentMonth(moment())
  }

  return (
      <div className="">
        <div className="bg-white shadow-md rounded px-8 pt-1 pb-2 mb-0 my-2">

          <div className="text-gray-600 flex items-center justify-center select-none">


            <button className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full focus:outline-none hover:bg-gray-200" onClick={increaseCellHeight}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <button className="inline-flex items-center justify-center h-10 transition-colors duration-300 bg-white rounded-full px-3 mx-3 focus:outline-none hover:bg-gray-200" onClick={selectToday}>
              <div>Today</div>
            </button>

            <button className="inline-flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full focus:outline-none hover:bg-gray-200" onClick={decreaseCellHeight}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

        </div>


        <Calendar tasks={tasks} cellHeight={cellHeight} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

        <div className="mx-7 mt-10 mb-5 text-gray-600 text-2xl">{selectedDate.format('dddd, MMMM Do YYYY')}</div>

        <div className="px-2">

          {tasks.filter(x => moment(x.time).isSame(selectedDate, 'day')).length!==0
            ? tasks.filter(x => moment(x.time).isSame(selectedDate, 'day')).map(x => 
              <DayItem key={x.id} projects={projects} item={x} tasks={tasks} setTasks={setTasks}/>
            )
            : <div className="ml-6 text-gray-400"> No task due on this day </div>
          }

        </div>
      </div>
  )
}

export default CalendarPage;