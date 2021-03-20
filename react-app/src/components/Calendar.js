import React from "react";
import { useState } from 'react'

import moment from 'moment'
import {format, startOfWeek, startOfMonth, addDays, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths, parse} from "date-fns";
import './Calendar.css'

const Calendar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const renderHeader = () => {
    const dateFormat = "yyyy MMMM";

    return (
      <div className="header row flex-middle">
        <div className="calendar-col calendar-col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="calendar-col calendar-col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="calendar-col calendar-col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const dateFormat = "iii"
    const days = []

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="calendar-col calendar-col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      )
    }

    return <div className="days row">{days}</div>
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const dateFormat = "d"
    const rows = []

    let days = []
    let day = startDate
    let formattedDate = ""

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);

        const dayTasks = props.tasks.filter(x => x.day[2]===parseInt(formattedDate))

        const cloneDay = day;
        days.push(
          <div
            className={`calendar-col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <div className="ml-3 mr-3 mt-8 flex-wrap text-left text-xs text-gray-500">
              {dayTasks.length !== 0
                && dayTasks.map(x => <div>{x.text}</div>)  
              }
            </div>
          </div>
        )
        day = addDays(day, 1);
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

  const onDateClick = (day) => {
    console.log("Calendar date change:", day)
    setSelectedDate(day)
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
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