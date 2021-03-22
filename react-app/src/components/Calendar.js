import React from "react";
import { useState } from 'react'

import moment from 'moment'
import './Calendar.css'

import CalendarTaskItem from './calendar_components/CalendarTaskItem'

const Calendar = (props) => {

  const renderHeader = () => {
    return (
      <div className="text-gray-700 text-4xl uppercase flex flex-wrap pt-3 pb-1 justify-between mb-8 mx-6">

        <div className="cursor-pointer inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 bg-white focus:outline-none hover:text-blue-500 hover:bg-gray-100" onClick={prevMonth}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="select-none">
          <span className="pointer-events-none">{props.currentMonth.format('YYYY MMMM')}</span>
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

    let startDate = moment(props.currentMonth).startOf('w')

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex flex-grow justify-center" key={i}>
          {startDate.add(i, 'd').format('ddd')}
        </div>
      )
    }

    return <div className="flex pb-3 text-gray-700 select-none">{days}</div>
  }

  const renderCells = () => {
    const monthStart = moment(props.currentMonth).startOf('month')
    const monthEnd = moment(props.currentMonth).endOf('month')
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
            className={`calendar-col cell h-${props.cellHeight} border-l ${
              !day.isSame(monthStart, 'month')
                ? "text-gray-200 pointer-events-none"
                : day.isSame(props.selectedDate, 'd') ? "selected text-gray-500" : "text-gray-500"
            }`}
            key={day}
            onClick={() => props.setSelectedDate(cloneDay)}
          >
            <span className="number select-none">{day.format('D')}</span>
            <span className="bg select-none">{day.format('D')}</span>
            <div className="ml-2 mr-2 mt-8 flex-wrap text-left text-xs text-gray-500">
              {dayTasks.length !== 0
                && dayTasks.map(x => <CalendarTaskItem key={x.id} item={x}/>)
              }
            </div>
          </div>
        )
        day.add(1, 'd')
      }
      rows.push(
        <div className="flex border-t" key={day}>
          {days}
        </div>
      )
      days = []
    }
    return <div className="body border-b border-r">{rows}</div>;
  }

  const nextMonth = () => {
    console.log("Next Month")
    props.setCurrentMonth(props.currentMonth.add(1, 'M'))
    props.setSelectedDate(props.currentMonth.isSame(moment(), 'M')
                    ? moment()
                    : moment(props.currentMonth).startOf('M')
    )
  }

  const prevMonth = () => {
    console.log("Previous Month")
    props.setCurrentMonth(props.currentMonth.subtract(1, 'M'))
    props.setSelectedDate(props.currentMonth.isSame(moment(), 'M')
                    ? moment()
                    : moment(props.currentMonth).startOf('M')
    )
  }


  return (
    <div className="calendar border-2 border-gray-300 p-5 mx-6 mt-6 rounded-md tracking-wide shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar