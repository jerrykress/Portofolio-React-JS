import React from 'react'
import { useState } from 'react'
import moment from 'moment'

import RenameButton from './../task_components/ModalRenameButton'


const ProjectDetailModal = (props) => {
    const levels = ["LOW", "MED", "HIGH"]
    const levelColors = ["green", "yellow", "red"]

    const [isRenameActive, setIsRenameActive] = useState(false)
    const [renamedTitle, setRenamedTitle] = useState(props.modalProject.name)

    const closeSelf = () => {
        console.log("Close task modal and discard changes")
        props.setModalPresented(false)
    }

    const saveRename = () => {
        console.log("Close task modal and save changes")
        props.modalProject.name = renamedTitle
        props.setModalPresented(false)
    }
    
    return (
        <div className="z-40 fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-gray-900 opacity-70"></div>
            
            <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                {/* <!-- Modal Body --> */}
                <div className="py-4 text-left px-6 mt-3">

                    {/* <!--Title--> */}
                    <div className="flex justify-between items-center pb-2 mt-3">
                        {isRenameActive
                            ? 
                            <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-gray-600 text-2xl border border-red rounded py-0 px-2 mr-3 transition-colors duration-300 hover:border-gray-400" type='text' value={renamedTitle} onChange={(e) => setRenamedTitle(e.target.value)}/>
                            :
                            <p className="text-gray-700 text-3xl">{props.modalProject.name}</p>
                        }
                        <RenameButton isActive={isRenameActive} setIsActive={setIsRenameActive}/>
                    </div>

                    {/* <!--Body--> */}
                    <p className="mb-5 mt-1 text-s italic text-gray-500">{moment(props.modalProject.endTime).format('llll')}</p>

                    <p className="text-s mt-5 text-gray-500">{`Project Info Placeholder`}</p>

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2 pb-0">
                        <button className="px-4 bg-transparent p-2 rounded-lg focus:outline-none text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2" onClick={closeSelf}>Cancel</button>
                        <button className="px-4 bg-indigo-500 p-2 rounded-lg focus:outline-none text-white hover:bg-indigo-400" onClick={saveRename}>Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailModal
