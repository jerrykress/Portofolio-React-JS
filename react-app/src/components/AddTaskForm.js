import React from 'react'
import { useState } from 'react'

import AddTaskButton from './task_components/AddTaskButton'
import PriorityButton from './task_components/TaskPriorityButton'

const AddTaskForm = (props) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    // const [reminder, setReminder] = useState(false)

    const addTask = (e) => {
        e.preventDefault()
        // if text is empty, abort
        if(!text){
            alert("text can not be empty.")
            return
        }
        // if date is empty, abort
        if(!day){
            alert("Time can not be empty.")
            return
        }
        // submit
        const id = Math.floor(Math.random() * 10000) + 1
        const reminder = false
        const task = {id, text, day, reminder}
        props.setTasks([...props.globalTasks, task])
        // clear form
        setText('')
        setDay('')
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2">
            <div className="tracking-wide px-3 mb-6 md:mb-0 ml-2 mr-2 grid gap-4 sm:grid-cols-3 md:grid-cols-9">
                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> text </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> Date </label>
                    <input className="appearance-none  w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className="form-control col-span-1">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Priority </label>
                    <PriorityButton className="form-control" text='Add Task' onClick={addTask}/>
                </div>
                <div className="form-control col-span-1">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Tag </label>
                    <AddTaskButton className="form-control" text='Add Task' onClick={addTask}/>
                </div>
                <div className="form-control col-span-1">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Add </label>
                    <AddTaskButton className="form-control" text='Add Task' onClick={addTask}/>
                </div>
            </div>
        </div>
    )
}

export default AddTaskForm
