import React from 'react'
import { useState } from 'react'
import moment from 'moment'

import RenameButton from './../task_components/ModalRenameButton'
import ProgressBar from './ProjectProgressBar'
import TaskItem from './ProjectTaskItem'


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
            
            <div className="bg-white w-11/12 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">

                {/* <!-- Modal Body --> */}
                <div className="py-4 text-left px-6 mt-3">

                    {/* <!--Title--> */}
                    <div className="flex justify-between items-center pb-3 mt-3">
                        {isRenameActive
                            ? 
                            <input className="appearance-none w-full bg-grey-lighter focus:outline-none text-gray-600 text-2xl border border-red rounded py-0 px-2 mr-3 transition-colors duration-300 hover:border-gray-400" type='text' value={renamedTitle} onChange={(e) => setRenamedTitle(e.target.value)}/>
                            :
                            <p className="text-gray-700 text-3xl">{props.modalProject.name}</p>
                        }
                        <RenameButton isActive={isRenameActive} setIsActive={setIsRenameActive}/>
                    </div>

                    {/* <!--Body--> */}
                    <div className="flex items-center gap-2">
                        <p className="text-s italic text-gray-500">{moment(props.modalProject.startTime).format('llll')}</p>

                        <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>

                        <p className="text-s italic text-gray-500">{moment(props.modalProject.endTime).format('llll')}</p>
                    </div>
                    
                    <div className="mt-3">
                        <ProgressBar 
                            completedPercent={Math.round(props.tasks.filter(x => x.project===props.modalProject.id && !x.completed).map(x => x.weight).reduce((a, b) => a + b, 0) * (-100) + 100)} 
                            pendingPercent={moment().isAfter(moment(props.modalProject.endTime))
                                            ? 100
                                            : moment().isBefore(moment(props.modalProject.startTime))
                                                ? 0
                                                : Math.round(moment().diff(moment(props.modalProject.startTime)) / moment(props.modalProject.endTime).diff(moment(props.modalProject.startTime))*100)
                                            
                            }
                        />
                    </div>

                    <div className="mt-5 -mx-1">
                        {props.tasks.filter(x => x.project===props.modalProject.id).map(task => 
                            <TaskItem key={task.id} item={task} parentProject={props.modalProject} showValue={false} showWeight={false} showDisownBtn={true} forceRefreshTasks={props.forceRefreshTasks}/>
                        )}
                    </div>

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2 pb-0">
                        <button className="px-4 bg-transparent p-2 rounded-lg focus:outline-none text-blue-500 hover:bg-gray-100 hover:text-blue-400 mr-2" onClick={closeSelf}>Cancel</button>
                        <button className="px-4 bg-blue-500 p-2 rounded-lg focus:outline-none text-white hover:bg-blue-400" onClick={saveRename}>Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailModal
