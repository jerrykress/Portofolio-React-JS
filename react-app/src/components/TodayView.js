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

    const toggleCompleted = (id) => {
        console.log('toggle complete', id)
        props.setTasks(props.tasks.map((task)=>task.id === id ? {...task, completed: !task.completed} : task))
    }

    return (
        <div className="">
            <p className="mx-12 mt-12 text-gray-700 text-3xl">Highlighted Tasks</p>
            <div className="grid gap-4 m-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {props.tasks.filter((task) => task.reminder === true && task.completed === false).length > 0
                    ? (props.tasks.filter((task) => task.reminder === true && task.completed === false).map((task) => (
                    <TaskItem key={task.id} onDelete={deleteTask} onToggle={toggleTask} onComplete={toggleCompleted} item={task} invokeModal={props.invokeModal} />))) 
                    : <div className="ml-4 text-gray-400"> No highlighted task </div>
                }
            </div>
        </div>
    )
}

export default TodayView
