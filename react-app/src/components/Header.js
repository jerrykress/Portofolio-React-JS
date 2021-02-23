import PropTypes from 'prop-types'

import Button from './Button'

const Header = (props) => {

    const buttonClick = (e) => {
        console.log(e)
    }

    return (
        <header>
            <h1>React Todo</h1>
            <p>{props.title}</p>
            <Button text='Add Task' onClick={buttonClick} />
        </header>
    )
}

// default args
Header.defaultProps = {
    title : 'Default Message',
}

// guard
Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header
