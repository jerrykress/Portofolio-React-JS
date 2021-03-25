import React from 'react'
import { useState } from 'react'
import moment from 'moment'

import RenameButton from './ModalRenameButton'
import ParseField from './../DateParseInputField'

const DialogModal = (props) => {
    const levels = ["LOW", "MED", "HIGH"]
    const levelColors = ["green", "yellow", "red"]

    const [isRenameActive, setIsRenameActive] = useState(false)
    const [renamedTitle, setRenamedTitle] = useState(props.modalTask.text)
    const [newNotes, setNewNotes] = useState(props.modalTask.notes)
    const [newWeight, setNewWeight] = useState(props.modalTask.weight)
    const [dayDisplay, setDayDisplay] = useState('Date')
    const [momentArr, setMomentArr] = useState(moment(props.modalTask.day))

    const closeSelf = () => {
        console.log("Close task modal and save changes")
        props.setModalPresented(false)
    }

    const saveChanges = () => {
        console.log("Close task modal and discard changes")
        props.modalTask.text = renamedTitle
        props.modalTask.weight = parseFloat(newWeight)
        props.modalTask.notes = newNotes
        props.setModalPresented(false)
    }
    
    return (
        <div className="z-40 fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-gray-900 opacity-70"></div>
            
            <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                {/* <!-- Modal Body --> */}
                <div className="py-4 text-left px-6 mt-3">
                    {/* <!--Priority Tag--> */}
                    <div className="flex justify-start w-full items-center">
                        <span className={`inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-${levelColors[props.modalTask.priority]}-100 bg-${levelColors[props.modalTask.priority]}-600 rounded-full`}>
                            {levels[props.modalTask.priority]}
                        </span>

                        <p className={`text-s uppercase ml-2 text-${levelColors[props.modalTask.priority]}-500`}>{`${props.projects.filter(x => x.id===props.modalTask.project)[0].name}`}</p>
                    </div>

                    {/* <!--Title--> */}
                    <div className="flex justify-between items-center pb-2 mt-3">
                        {isRenameActive
                            ? 
                            <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-gray-600 text-2xl border border-red rounded py-0 px-2 mr-3 transition-colors duration-300 hover:border-gray-400" type='text' value={renamedTitle} onChange={(e) => setRenamedTitle(e.target.value)}/>
                            :
                            <p className="text-gray-700 text-3xl">{props.modalTask.text}</p>
                        }
                        <RenameButton isActive={isRenameActive} setIsActive={setIsRenameActive}/>
                    </div>

                    {/* <!--Date--> */}
                    {isRenameActive ? <ParseField setDisplayed={setDayDisplay} setMomentArr={setMomentArr} />
                                    : <p className="mb-5 mt-1 text-s italic text-gray-500">{moment(props.modalTask.day).format('llll')}</p>
                    }
                    
                    
                    {/* Task Weight  */}
                    {isRenameActive
                            ? <div className="">
                                <p className="ml-0 mb-1 text-xs text-gray-600 uppercase">{`Weight: ${newWeight * 100}%`}</p>
                                <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-gray-500 text-a border border-red rounded py-0 px-2 mr-3 mb-4 transition-colors duration-300 hover:border-gray-400" type='text' value={newWeight} onChange={(e) => setNewWeight(e.target.value)} placeholder="Task Weight"/>
                              </div>
                            : <div>
                                <p className="text-s mt-5 text-gray-500">{`Task weight: ${props.modalTask.weight}`}</p>
                                <p className="text-s mb-5 text-gray-500">{`Actual value: ${props.modalTask.weight * props.projects.filter(x => x.id===props.modalTask.project)[0].value}`}</p>
                            </div>
                    }

                    

                    {isRenameActive 
                            ? <textarea className="appearance-none w-full h-40 resize-y bg-grey-lighter focus:outline-none text-gray-500 text-s border border-red rounded py-0 px-2 mr-3 transition-colors duration-300 hover:border-gray-400" type='text' value={newNotes} onChange={(e) => setNewNotes(e.target.value)}/>
                            : <p className="text-s mb-5 text-gray-500">{props.modalTask.notes}</p>            
                    }
                    
                    

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2 pb-0">
                        <button className="px-4 bg-transparent p-2 rounded-lg focus:outline-none text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2" onClick={closeSelf}>Cancel</button>
                        <button className="px-4 bg-indigo-500 p-2 rounded-lg focus:outline-none text-white hover:bg-indigo-400" onClick={saveChanges}>Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DialogModal
