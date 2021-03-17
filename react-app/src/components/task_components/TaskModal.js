import React from 'react'
import moment from 'moment'

const DialogModal = (props) => {
    const levels = ["LOW", "MED", "HIGH"]
    const levelColors = ["green", "yellow", "red"]

    const closeSelf = () => {
        console.log("Close Modal")
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
                        <p className="text-gray-700 text-3xl">{props.modalTask.text}</p>
                    </div>

                    {/* <!--Body--> */}
                    <p className="mb-5 mt-1 text-s italic text-gray-500">{moment(props.modalTask.day).format('llll')}</p>

                    <p className="text-s mt-5 text-gray-500">{`Task weight: ${props.modalTask.weight}`}</p>
                    <p className="text-s mb-5 text-gray-500">{`Actual value: ${props.modalTask.weight * props.projects.filter(x => x.id===props.modalTask.project)[0].value}`}</p>
                    <p className="text-s mb-5 text-gray-500">{props.modalTask.notes}</p>

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2 pb-0">
                        <button className="px-4 bg-transparent p-2 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
                        <button className="px-4 bg-indigo-500 p-2 rounded-lg text-white hover:bg-indigo-400" onClick={closeSelf}>Done</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DialogModal
