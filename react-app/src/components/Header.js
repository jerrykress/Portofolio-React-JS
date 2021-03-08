import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const buttonClick = (e) => {
        console.log(e)
    }

    return (
        <header className="flex flex-col items-center">
            <Button text='Add Task' onClick={buttonClick} />
            <DatePicker className="focus:outline-none" selected={startDate} onChange={date => setStartDate(date)} />
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
