const TaskItemButton = (props) => {
    return (
        <button className="mt-4 focus:outline-none text-gray-800 text-sm py-1.5 px-4 rounded-full border border-gray-800 hover:text-red-500 hover:border-red-500"
                onClick={() => props.onClick(props.item.id)}>
            {props.text}
        </button>
    )
}

export default TaskItemButton
