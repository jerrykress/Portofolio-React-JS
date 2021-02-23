import TaskItem from './TaskItem'

const Task = (props) => {
    const deleteTask = (id) => {
        console.log('delete', id)
        props.setTasks(props.tasks.filter((task) => task.id !== id))
    }
   

    return (
        <div className="grid grid-cols-4 gap-4 m-10 lg:grid-cols-5">
            {props.tasks.length > 0
                ? (props.tasks.map((task) => (
                <TaskItem key={task.id} onDelete={deleteTask} item={task} />))) 
                : 'No Task to Show'
            }
        </div>
    )
}

export default Task
