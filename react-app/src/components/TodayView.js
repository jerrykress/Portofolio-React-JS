import React from 'react'
import TaskItem from './TaskItem'

const TodayView = (props) => {
    const deleteTask = (id) => {
        console.log('delete', id)
        props.setTasks(props.tasks.filter((task) => task.id !== id))
    }

    const toggleTask = (id) => {
        console.log('toggle', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    return (
        <div className="">
            <p className="mx-12 mt-12 text-gray-700 text-3xl">Highlighted Tasks</p>
            <div className="grid gap-4 m-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {props.tasks.length > 0
                    ? (props.tasks.filter((task) => task.reminder === true).map((task) => (
                    <TaskItem key={task.id} onDelete={deleteTask} onToggle={toggleTask} item={task} />))) 
                    : 'No Task to Show'
                }
            </div>
        </div>
    )
}

export default TodayView
