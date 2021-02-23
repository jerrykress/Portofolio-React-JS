import { FaTimes } from 'react-icons/fa'

const TaskItem = (props) => {
    return (
        <div className='taskItem'>
            <h3 key={props.item.id}>
                {props.item.text}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => props.onDelete(props.item.id)}/>
            </h3>
            <p>{props.item.day}</p>
        </div>
    )
}

export default TaskItem
