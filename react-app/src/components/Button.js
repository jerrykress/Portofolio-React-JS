import './../index.css'

const Button = (props) => {
    
    return (
        <button className="m-3 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:flex items-center" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

// default
Button.defaultProps = {
    text: 'Undefined Button',
}

export default Button
