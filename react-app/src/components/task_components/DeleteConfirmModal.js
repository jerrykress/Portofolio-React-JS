import React from 'react'

const DeleteConfirmModal = (props) => {
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

                    {/* <!--Title--> */}
                    <div className="flex justify-between items-center pb-2 mt-3">
                        <p className="text-gray-700 text-3xl">Delete Task?</p>
                    </div>

                    {/* <!--Body--> */}
                    <p className="mb-5 mt-1 text-s italic text-gray-500">{`Are you sure you want to delete task: ${props.modalTask.text}?`}</p>

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2 pb-0">
                        <button className="px-4 bg-transparent p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 mr-2" onClick={closeSelf}>Cancel</button>
                        <button className="px-4 bg-red-500 p-2 rounded-lg text-white hover:bg-red-400" onClick={()=>props.onDelete(props.modalTask.id)}>Delete</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmModal
