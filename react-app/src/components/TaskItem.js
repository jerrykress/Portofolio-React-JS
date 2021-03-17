import moment from 'moment'

import TaskDeleteButton from './task_components/TaskDeleteButton'
import TaskRemindButton from './task_components/TaskRemindButton'
import TaskCheckButton from './task_components/TaskCheckButton'

const TaskItem = (props) => {
    const levels = ["LOW", "MED", "HIGH"]
    const levelColors = ["green", "yellow", "red"]
    
    return (
        <div className={`font-sans flex flex-wrap content-between h-auto m-4 bg-white border-2 border-gray-300 hover:${props.item.reminder ? "border-green-500" : "border-gray-500"} transition-colors duration-1000 p-6 rounded-md tracking-wide shadow-lg` + (props.item.reminder && " border-3 border-green-500")} onClick={()=>props.invokeModal(props.item)} onDoubleClick={()=>props.onToggle(props.item.id)} >
            <div className="w-full">
                <span className={`inline-flex items-center justify-center px-2 py-1 mr-2 mb-2 -ml-0 text-xxs leading-none text-${levelColors[props.item.priority]}-100 bg-${levelColors[props.item.priority]}-600 rounded-full`}>
                    {/* {levels[props.item.priority]} */}
                    {/* {props.item.project} */}
                    </span>
                <h3 className="text-l font-semibold subpixel-antialiased" key={props.item.id}>{props.item.text}</h3>
                <p className="text-xs italic text-gray-600 mt-2">{moment(props.item.day).format('llll')}</p>
            </div>

            <div className="mt-3 align-baseline -mb-2">
                <TaskDeleteButton onClick={props.onDelete} text="Delete" item={props.item}/>
            </div>
            <div className="mt-3 align-baseline -mb-2">
                <TaskRemindButton onClick={props.onToggle} text="Remind" item={props.item}/>
            </div>
            <div className="mt-3 align-baseline -mb-2">
                <TaskCheckButton onClick={props.onComplete} text="Complete" item={props.item}/>
            </div>
        </div>
    )
}

export default TaskItem
