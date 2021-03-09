import TaskDeleteButton from './task_components/TaskDeleteButton'
import TaskRemindButton from './task_components/TaskRemindButton'

const TaskItem = (props) => {
    return (
        <div className={`font-sans flex flex-wrap content-between h-auto m-4 bg-white border-2 border-gray-300 hover:${props.item.reminder ? "border-green-600" : "border-gray-500"} transition-colors duration-1000 p-6 rounded-md tracking-wide shadow-lg` + (props.item.reminder && " border-3 border-green-500")} onDoubleClick={()=>props.onToggle(props.item.id)} >
            <div className="w-full">
                <h3 className="text-l font-semibold" key={props.item.id}>{props.item.text}</h3>
                <p className="text-xs italic text-gray-600 mt-2">{props.item.day}</p>
            </div>

            <div className="mt-3 align-baseline -mb-2">
                <TaskDeleteButton onClick={props.onDelete} text="Delete" item={props.item}/>
            </div>
            <div className="mt-3 align-baseline -mb-2">
                <TaskRemindButton onClick={props.onToggle} text="Remind" item={props.item}/>
            </div>
        </div>
    )
}

export default TaskItem
