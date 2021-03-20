import React from "react";
import { useState } from 'react'

import moment from 'moment'
import './Calendar.css'

const Calendar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(moment())
  const [selectedDate, setSelectedDate] = useState(moment())

  const renderHeader = () => {
    return (
      <div className="text-gray-700 text-4xl uppercase flex flex-wrap pt-6 pb-5 justify-between mb-8 mx-6">

        <div className="cursor-pointer inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 bg-white focus:outline-none hover:text-blue-500 hover:bg-gray-100" onClick={prevMonth}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="">
          <span>{currentMonth.format('YYYY MMMM')}</span>
        </div>

        <div className="cursor-pointer inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 bg-white focus:outline-none hover:text-blue-500 hover:bg-gray-100" onClick={nextMonth}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const days = []

    let startDate = moment(currentMonth).startOf('w')

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex flex-grow justify-center" key={i}>
          {startDate.add(i, 'd').format('ddd')}
        </div>
      )
    }

    return <div className="flex pb-3 text-gray-700">{days}</div>
  }

  const renderCells = () => {
    const monthStart = moment(currentMonth).startOf('month')
    const monthEnd = moment(currentMonth).endOf('month')
    const startDate = moment(monthStart).startOf('week')
    const endDate = moment(monthEnd).endOf('week')
    
    const rows = []
    
    let days = []
    let day = moment(startDate)

    while (day.isBefore(endDate)) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = moment(day);
        const dayTasks = props.tasks.filter(x => moment(x.day).isSame(cloneDay, 'day'))

        days.push(
          <div
            className={`calendar-col cell ${
              !day.isSame(monthStart, 'month')
                ? "text-gray-200 pointer-events-none"
                : day.isSame(selectedDate, 'd') ? "selected text-gray-500" : "text-gray-500"
            }`}
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="number">{day.format('D')}</span>
            <span className="bg">{day.format('D')}</span>
            <div className="ml-3 mr-3 mt-8 flex-wrap text-left text-xs text-gray-500">
              {dayTasks.length !== 0
                && dayTasks.map(x => <div key={x.id}>{x.text}</div>)  
              }
            </div>
          </div>
        )
        day.add(1, 'd')
      }
      rows.push(
        <div className="flex border" key={day}>
          {days}
        </div>
      )
      days = []
    }
    return <div className="body">{rows}</div>;
  }

  const nextMonth = () => {
    console.log("Next Month")
    setCurrentMonth(currentMonth.add(1, 'M'))
    setSelectedDate(currentMonth.isSame(moment(), 'M')
                    ? moment()
                    : moment(currentMonth).startOf('M')
    )
  }

  const prevMonth = () => {
    console.log("Previous Month")
    setCurrentMonth(currentMonth.subtract(1, 'M'))
    setSelectedDate(currentMonth.isSame(moment(), 'M')
                    ? moment()
                    : moment(currentMonth).startOf('M')
    )
  }


  return (
    <div className="calendar border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar