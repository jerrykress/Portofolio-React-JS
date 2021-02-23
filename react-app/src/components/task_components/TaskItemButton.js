const TaskItemButton = (props) => {
    return (
        <button className="mt-4 focus:outline-none text-gray-800 text-sm py-1.5 px-4 rounded-full border border-gray-800 hover:text-red-500"
                onClick={() => props.onDelete(props.item.id)}
        >
            Delete
        </button>
    )
}

export default TaskItemButton
