import React from 'react'
import { useState } from 'react'
import moment from 'moment'

import AddTaskButton from './task_components/AddTaskButton'
import PriorityButton from './task_components/TaskPriorityButton'
import ParseField from './DateParseInputField'
import ProjectSelector from './task_components/TaskProjectButton'
import ReminderToggle from './task_components/TaskToggleReminderButton'

import { DataStore } from '@aws-amplify/datastore';
import { Task } from './../models';

const AddTaskForm = (props) => {
    const [text, setText] = useState('')
    const [dayDisplay, setDayDisplay] = useState('Date')
    const [momentArr, setMomentArr] = useState(moment())
    const [reminder, setReminder] = useState(false)
    const [priority, setPriority] = useState(0)
    const [project, setProject] = useState(1)
    const [notes, setNotes] = useState('')
    const [weight, setWeight] = useState(0)

    async function createTask() {
        // if text is empty, abort
        if(!text){
            alert("Task title can not be empty.")
            return
        }
        // if date is empty, abort
        if(!dayDisplay){
            alert("Time can not be empty.")
            return
        }
        // if weight is invalid
        if(weight < 0 || weight > 1){
            alert("Weight must be between 0 and 1.")
            return
        }
        const p = props.projects.filter(x => x.id===project)[0]
        await DataStore.save(
            new Task({
                "projectID": project,
                "project": p,
                "title": text,
                "text": notes,
                "time":  momentArr,
                "reminder": reminder,
                "priority": priority,
                "completed": false,
                "weight": weight * 100 * 0.01,
                "participants": []
            })
        );
        // clear form
        setText('')
        setDayDisplay('')
    }

    return (
        <div className="bg-white shadow-md rounded px-8 pt-3 pb-4 mb-4 my-2">
            <div className="tracking-wide px-3 mb-6 md:mb-0 ml-2 mr-2 grid gap-4 sm:grid-cols-3 md:grid-cols-9">
                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> Title </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="enter a title"/>
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> {dayDisplay === "" ? "Date" : dayDisplay} </label>
                    <ParseField setDisplayed={setDayDisplay} setMomentArr={setMomentArr} />
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> Notes </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="details of the task"/>
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> {`Weight: ${weight*100}%`} </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="task weight (0-1)"/>
                </div>

                <div className="form-control col-span-3">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Project </label>
                    <ProjectSelector className="form-control" text='Task Project' projects={props.projects} setTaskProject={setProject}/>
                </div>

                <div className="form-control col-span-1">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Priority </label>
                    <PriorityButton className="form-control" text='Task Priority' level={priority} setLevel={setPriority} />
                </div>

                <div className="form-control col-span-1">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Reminder </label>
                    <ReminderToggle className="form-control" text='Task Reminder' reminder={reminder} setReminder={setReminder}/>
                </div>
                
                <div className="form-control col-span-1">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Add </label>
                    <AddTaskButton className="form-control" text='Add Task' onClick={createTask}/>
                </div>
            </div>
        </div>
    )
}

export default AddTaskForm
