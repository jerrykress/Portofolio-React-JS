import TaskItem from './TaskItem'

const Task = (props) => {
    const deleteTask = (id) => {
        console.log('delete', id)
        props.setTasks(props.tasks.filter((task) => task.id !== id))
    }
   

    return (
        <div className="taskList">
            {props.tasks.map((task) => (
                <TaskItem key={task.id} onDelete={deleteTask} item={task} />
            ))}
        </div>
    )
}

export default Task
