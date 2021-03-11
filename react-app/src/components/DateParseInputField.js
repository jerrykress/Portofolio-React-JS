import React from 'react'
import moment from 'moment'
import { useState } from 'react'

const DateParseInputField = (props) => {
    // get current date and time
    const [displayContent, setDisplayContent] = useState(moment())
    const [textInput, setTextInput] = useState('')

    const parseHandler = (textValue) => {
        // update the textbox state
        setTextInput(textValue)
        const parsedMoment = getParsedMoment(textValue)
        console.log("Parsed raw value: "
            + ' ' + String(parsedMoment.year())
            + ' ' + String(parsedMoment.month())
            + ' ' + String(parsedMoment.date())
            + ' ' + String(parsedMoment.hour())
            + ' ' + String(parsedMoment.minute()))
        const formattedMoment = ("Date: "
            + ' ' + parsedMoment.year()
            + ' ' + months[parsedMoment.month()]
            + ' ' + parsedMoment.date()
            + ' ' + parsedMoment.hour()
            + ':' + parsedMoment.minute().toString().padStart(2,0))
        props.setDisplayed(formattedMoment)
    }
    
    return (
        <div>
            <input className="appearance-none  w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={textInput} onChange={(e) => parseHandler(e.target.value)} placeholder={formatMoment(moment())}/>
        </div>
    )
}

const formatMoment = (m) => {
    const formatted = (""
            + ' ' + m.year()
            + ' ' + months[m.month()]
            + ' ' + m.date()
            + ' ' + m.hour()
            + ':' + m.minute().toString().padStart(2,0))
    return formatted
}

// find the common element within 2 arrs, returns the index of the matching element in the 2nd array
const findCommon = (arr1, arr2) => { 

    for(let i = 0; i < arr1.length; i++) {  
        for(let j = 0; j < arr2.length; j++) {  
            if(arr1[i] === arr2[j]) { 
                return j
            } 
        } 
    }    
    return -1
} 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(x => x.toLowerCase())
const months_abbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(x => x.toLowerCase())

const getParsedMoment = (input) => {
    // typecast to string
    const s = String(input).toLowerCase()
    // get current time
    var now = moment()
    // default values
    now.set('hour', 12)
    now.set('minute', 0)

    // capture special date keywords
    if(s.includes("tomorrow")){
        now.add(1, 'd')
    }
    if(s.includes("next week")){
        now.add(7, 'd')
    }
    // tokenise
    var tokens = s.split(' ')
    // try to find year
    const possible_years = tokens.map(x => parseInt(x)).filter(x => x > now.year()-1)
    if(possible_years.length > 0){
        now.set('year', possible_years[0])
    }
    // try to find month
    var temp_month = findCommon(tokens, months)
    // if full spell not found, try abbreviation
    if(temp_month === -1){
        temp_month = findCommon(tokens, months_abbr)
    }
    // if finally had a match, set it in moment
    if(temp_month !== -1){
        now.set('month', temp_month)
    }
    // try to find date
    const possible_dates = tokens.map(x => parseInt(x)).filter(x => x<32)
    if(possible_dates.length > 0){
        now.set('date', possible_dates[0])
    }
    // attempt to find time if hint word is present
    if(tokens.indexOf("at") !== -1){
        const at_pos = tokens.indexOf("at")
        var partial_tokens = tokens.slice(at_pos)
        // see if there are numbers after 'at'
        var partial_tok_nums = partial_tokens.map(x => parseInt(x)).filter(x => !isNaN(x))
        // if there are numbers
        if(partial_tok_nums.length !== 0){
            if(partial_tok_nums.length === 1){
                // if time has a separator ':'
                if(tokens[at_pos + 1].includes(':')){
                    const hrMin = tokens[at_pos + 1].split(':')
                    if(hrMin.length > 0 && !isNaN(parseInt(hrMin[0]))){
                        now.set('hour', parseInt(hrMin[0]))
                    }
                    if(hrMin.length > 1 && !isNaN(parseInt(hrMin[1]))){
                        now.set('minute', parseInt(hrMin[1]))
                    }
                }
                // if only hour is provided
                else {
                    if(!isNaN(parseInt(tokens[at_pos + 1]))){
                        now.set('hour', parseInt(tokens[at_pos + 1]))
                    }
                }
            } else {
            // if no separator is present, try to parse two numbers
                now.set('hour', partial_tok_nums[0])
                now.set('minute', partial_tok_nums[1])
            }
        }
        // try to find the date
        partial_tokens = tokens.slice(0, at_pos)
        partial_tok_nums = partial_tokens.map(x => parseInt(x)).filter(x => !isNaN(x))
        if(partial_tok_nums.filter(x => x>2000).length !== 0){
            now.set('year', partial_tok_nums.filter(x => x>2000)[0]) 
        }
        if(partial_tok_nums.filter(x => x<32).length !== 0){
            now.set('date', partial_tok_nums.filter(x => x<32)[0])
        }
    }
    return now
}

export default DateParseInputField
