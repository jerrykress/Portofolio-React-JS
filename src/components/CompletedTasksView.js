import React from 'react'
import CompletedItem from './CompletedItem'

import { DataStore } from '@aws-amplify/datastore';
import { Task } from './../models';

const CompletedTasksView = (props) => {
    const deleteTask = (id) => {
        console.log('delete', id)
        props.setTasks(props.tasks.filter((task) => task.id !== id))
    }

    async function toggleCompleted(id) {
        console.log('toggle complete', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, completed: !task.completed} : task))
        // save to datastore
        const temp = props.tasks.filter(task => task.id === id)
        if(temp.length === 0){
            console.log("Error restoring task, datastore task target not found.")
            return
        }
        const targetObject = temp[0]
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(Task.copyOf(targetObject, item => {
            // Update the values on {item} variable to update DataStore entry
            item.completed = false
        }))
        // refresh
        props.refreshInfo()
    }

    return (
        <div className="">
            <p className="mx-12 mt-10 text-gray-700 text-3xl">Completed Tasks</p>
            <div className="grid gap-1 m-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {props.tasks.filter((task) => task.completed === true).length > 0
                    ? (props.tasks.filter((task) => task.completed === true).map((task) => (
                    <CompletedItem key={task.id} onRestore={toggleCompleted} onDelete={deleteTask} item={task} refreshInfo={props.refreshInfo}/>))) 
                    : <div className="ml-4 text-gray-400"> No Task to Show </div>
                }
            </div>
        </div>
    )
}

export default CompletedTasksView
