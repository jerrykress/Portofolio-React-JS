const TaskRemindButton = (props) => {
    return (
        <button className={`inline-flex items-center justify-center w-10 h-10 mr-0 mt-3 transition-colors duration-150 bg-white rounded-full focus:shadow-outline ${props.item.reminder ? "text-green-500" : "text-gray-400"} hover:bg-gray-200 hover:text-green-500`}
                onClick={() => props.onClick(props.item.id)}>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        </button>
    )
}

export default TaskRemindButton
