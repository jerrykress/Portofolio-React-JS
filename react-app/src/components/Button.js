const Button = (props) => {
    
    return (
            <button className='... ring' onClick={props.onClick}>{props.text}</button>
    )
}

// default
Button.defaultProps = {
    text: 'Undefined Button',
}

export default Button
