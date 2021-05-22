/*

a list of all the tasks that are currently active (not completed)

*/ 

import { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';

import TaskItem from './TaskItem'
import SortDropDown from './task_components/SortTaskButton'
import FilterButton from './FilterTaskButton'

import { Task } from './../models';

const TaskList = (props) => {
    const [filterState, setFilterState] = useState(false)
    const [filteredProject, setFilteredProject] = useState(0)

    const deleteTask = (id) => {
        console.log('delete', id)
        props.setTasks(props.tasks.filter((task) => task.id !== id))
    }

    async function toggleTask(id) {
        console.log('toggle', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
        // save to datastore
        const temp = props.tasks.filter(task => task.id === id)
        if(temp.length === 0){
            console.log("Unknown Error 1, datastore task target not found.")
            return
        }
        const targetObject = temp[0]
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Task.copyOf(targetObject, item => {
            // Update the values on {item} variable to update DataStore entry
            item.reminder = !item.reminder
        }))
        // refresh
        props.refreshInfo()
    }

    async function toggleCompleted(id) {
        console.log('toggle complete', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, completed: !task.completed} : task))
        // save to datastore
        const temp = props.tasks.filter(task => task.id === id)
        if(temp.length === 0){
            console.log("Unknown Error 2, datastore task target not found.")
            return
        }
        const targetObject = temp[0]
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Task.copyOf(targetObject, item => {
            // Update the values on {item} variable to update DataStore entry
            item.completed = true
        }))
        // refresh
        props.refreshInfo()
    }

    const filterApplicationHandler = (p) => {
        setFilterState(p.id === 1 ? false : true)
        setFilteredProject(p.id)
    }

    return (
        <div>
            <div className="flex mt-10 mx-12 justify-between">
                <p className="text-gray-700 text-3xl">All Tasks</p>
                <div className="flex mr-2">
                    <FilterButton projects={props.projects} filterHandler={filterApplicationHandler}/>
                    <SortDropDown tasks={props.tasks} setTasks={props.setTasks}/>
                </div>
            </div>
            <div className="grid gap-1 mx-10 mt-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {props.tasks.filter((task) => task.completed === false && (task.project === filteredProject || !filterState)).length > 0
                    ? (props.tasks.filter((task) => task.completed === false && (task.project === filteredProject || !filterState)).map((task) => (
                   <TaskItem key={task.id} onDelete={deleteTask} onToggle={toggleTask} onComplete={toggleCompleted} item={task} invokeModal={props.invokeModal} />)))  
                    : <div className="ml-4 text-gray-400"> No task to show </div>
                }
            </div>
        </div>
    )
}

export default TaskList
