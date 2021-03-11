import React from 'react'
import CompletedItem from './CompletedItem'

const CompletedTasksView = (props) => {
    const deleteTask = (id) => {
        console.log('delete', id)
        props.setTasks(props.tasks.filter((task) => task.id !== id))
    }

    const toggleCompleted = (id) => {
        console.log('toggle complete', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, completed: !task.completed} : task))
    }

    return (
        <div className="">
            <p className="mx-12 mt-12 text-gray-700 text-3xl">Completed Tasks</p>
            <div className="grid gap-4 m-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {props.tasks.filter((task) => task.completed === true).length > 0
                    ? (props.tasks.filter((task) => task.completed === true).map((task) => (
                    <CompletedItem key={task.id} onRestore={toggleCompleted} onDelete={deleteTask} item={task} />))) 
                    : <div className="ml-4 text-gray-400"> No Task to Show </div>
                }
            </div>
        </div>
    )
}

export default CompletedTasksView
