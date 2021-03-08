const TaskRemindButton = (props) => {
    return (
        <button className="mt-4 focus:outline-none text-gray-800 text-sm py-1.5 px-4 rounded-full border border-gray-800 hover:text-green-500 hover:border-green-500"
                onClick={() => props.onClick(props.item.id)}>
            {(props.item.reminder) ? "Mute" : "Remind"}
        </button>
    )
}

export default TaskRemindButton
