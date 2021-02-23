import { FaTimes } from 'react-icons/fa'
import TaskItemButton from './task_components/TaskItemButton'

const TaskItem = (props) => {
    return (
        <div className="font-sans flex flex-wrap content-between h-auto m-4 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
            <div className="w-full">
                <h3 className="text-l font-semibold" key={props.item.id}>{props.item.text}</h3>
                <p className="text-xs italic text-gray-600 mt-2">{props.item.day}</p>
            </div>

            <div className="mt-3 align-baseline">
                <TaskItemButton onDelete={props.onDelete} item={props.item}/>
            </div>
        </div>
    )
}

export default TaskItem
