import React from 'react'
import { useState } from 'react'
import Calendar from './components/Calendar'

function CalendarPage(props) {

  return (
      <div className="p-10">
        <Calendar tasks={props.tasks}/>
      </div>
  )
}

export default CalendarPage;