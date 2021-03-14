import React from 'react'

const ProjectItem = (props) => {
    return (
        <div className={`font-sans flex flex-wrap content-between h-auto m-4 mb-6 bg-white border-2 border-gray-300 hover:border-gray-500 transition-colors duration-1000 p-6 rounded-md tracking-wide shadow-lg`} >
            <div className="w-full">
                <h3 className="subpixel-antialiased uppercase w-full text-grey-darker text-2xl mb-3" key={props.item.id}>{props.item.name}</h3>
                {props.tasks.filter(x => x.project===props.item.id).map(task => (
                    <div>{task.text}</div>
                ))}
            </div>

        </div>
    )
}

export default ProjectItem
