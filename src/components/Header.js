import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const buttonClick = (e) => {
        console.log(e)
    }

    return (
        <header className="flex flex-col mx-10 mt-5 -mb-5">
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
