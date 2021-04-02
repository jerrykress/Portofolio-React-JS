import { useState } from 'react'
import moment from 'moment'
import { API, Auth } from 'aws-amplify';

import ParseField from './DateParseInputField'
import AddProjectButton from './project_components/AddProjectButton'

import { DataStore } from '@aws-amplify/datastore';
import { Project } from './../models';

const AddProjectForm = (props) => {
    const [name, setName] = useState('')
    const [abbr, setAbbr] = useState('')
    const [color, setColor] = useState('gray')

    const [startTime, setStartTime] = useState('Start')
    const [startMomentArr, setStartMomentArr] = useState(moment())

    const [endTime, setEndTime] = useState('End')
    const [endMomentArr, setEndMomentArr] = useState(moment())

    const [participants, setParticipants] = useState('')
    const [value, setValue] = useState(0)

    const fetchUser = async () => {
        const { attributes } = await Auth.currentAuthenticatedUser();
        return toString(attributes.sub)
    }

    async function createProject(e) {
        e.preventDefault()
        // name check
        if(!name){
            alert("Project title can not be empty.")
            return
        }
        // get project components
        const owner = fetchUser()
        await DataStore.save(
        new Project({
            "abbreviation": abbr,
            "name": name,
            "color": color,
            "startTime":  startMomentArr,
            "endTime":  endMomentArr,
            "participants": [],
            "value": parseInt(value),
            "tasks": []
        })
);
    }
    
    const handleTitleInput = (s) => {
        console.log("Updating title:", s)
        setName(s)
        setAbbr(name.split(" ").map((n)=>n[0]).join("").toUpperCase())
    }

    const addProject = (e) => {
        e.preventDefault()
        // name check
        if(!name){
            alert("Project title can not be empty.")
            return
        }
        // get project components
        const id = Math.floor(Math.random() * 10000) + 1
        const participants = [1,2]
        const project = {id, abbr, name, color, startMomentArr, endMomentArr, participants, value}
        // add project to global
        props.setProjects([...props.globalProjects, project])
    }


    return (
        <div className="bg-white shadow-md rounded px-8 pt-3 pb-4 mb-4 my-2">
            <div className="tracking-wide px-3 mb-6 md:mb-0 ml-2 mr-2 grid gap-4 sm:grid-cols-3 md:grid-cols-9">
                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3">
                        {name==='' ? "Title" : `Title: ${name} (${name.split(" ").map((n)=>n[0]).join("").toUpperCase()})`} 
                    </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={name} onChange={(e) => handleTitleInput(e.target.value)} placeholder="enter a title"/>
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> {startTime === "" ? "Start" : startTime} </label>
                    <ParseField setDisplayed={setStartTime} setMomentArr={setStartMomentArr} />
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3"> {endTime === "" ? "End" : endTime} </label>
                    <ParseField setDisplayed={setEndTime} setMomentArr={setEndMomentArr} />
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3">
                        Participants 
                    </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={participants} onChange={(e) => setParticipants(e.target.value)} placeholder="enter a username"/>
                </div>

                <div className="form-control col-span-3">
                    <label className="subpixel-antialiased uppercase w-full text-grey-darker text-xs mb-3">
                        Value 
                    </label>
                    <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-grey-darker border border-red rounded py-3 px-4 mb-3 transition-colors duration-300 hover:border-gray-400" type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder="project value"/>
                </div>

                <div className="form-control col-span-3">
                    <label className="uppercase w-full text-grey-darker text-xs mb-3 text-white-500"> Add </label>
                    <AddProjectButton className="form-control" text='Add Task' onClick={createProject}/>
                </div>
            </div>
        </div>
    )
}

export default AddProjectForm

// id: 4,
// abbr: 'ECS',
// name: 'Cyber Security',
// color: 'red',
// startTime: [2017, 1, 2, 3, 0],
// endTime: [2017, 1, 2, 3, 0],
// participants: [1,2],
// value: 10