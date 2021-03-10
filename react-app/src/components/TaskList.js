/*

a list of all the tasks that are currently active (not completed)

*/ 

import TaskItem from './TaskItem'
import SortDropDown from './SortTaskButton'

const Task = (props) => {
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
        <div>
            <div className="flex mt-12 mx-12 justify-between">
                <p className="text-gray-700 text-3xl">All Tasks</p>
                <div className="mr-2">
                    <SortDropDown tasks={props.tasks} setTasks={props.setTasks}/>
                </div>
            </div>
            <div className="grid gap-4 m-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {props.tasks.length > 0
                    ? (props.tasks.filter((task) => task.completed === false).map((task) => (
                   <TaskItem key={task.id} onDelete={deleteTask} onToggle={toggleTask} onComplete={toggleCompleted} item={task} />)))  
                    : 'Add a task to begin!'
                }
            </div>
        </div>
    )
}

export default Task
