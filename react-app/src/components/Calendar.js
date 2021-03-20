import React from "react";
import { useState } from 'react'

import moment from 'moment'
import './Calendar.css'

const Calendar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(moment())
  const [selectedDate, setSelectedDate] = useState(moment())

  const renderHeader = () => {
    return (
      <div className="header row flex-middle">
        <div className="calendar-col calendar-col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="calendar-col calendar-col-center">
          <span>{currentMonth.format('YYYY MMMM')}</span>
        </div>
        <div className="calendar-col calendar-col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const days = []

    let startDate = moment(currentMonth).startOf('w')

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="calendar-col calendar-col-center" key={i}>
          {startDate.add(i, 'd').format('ddd')}
        </div>
      )
    }

    return <div className="days row">{days}</div>
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
              !day.isSame(monthStart, 'M')
                ? "disabled"
                : day.isSame(selectedDate, 'd') ? "selected" : ""
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
        <div className="row " key={day}>
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
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar