import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const buttonClick = (e) => {
        console.log(e)
    }

    return (
        <header className="flex flex-col items-center">
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
