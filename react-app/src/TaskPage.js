import React from 'react'
import { useState } from 'react'

import './index.css';
import './App.css';

import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import TodayView from './components/TodayView'
import CompletedView from './components/CompletedTasksView'
import TaskModal from './components/TaskModal'

function TaskPage({tasks, setTasks, projects, setProjects}) {
    const [modalPresented, setModalPresented] = useState(false)

    const [modalTask, setModalTask] = useState(tasks[0])

    const invokeModal = (t) => {
      console.log("Showing task modal for task", t.id, t.text)
      setModalTask(t)
      setModalPresented(true)
    }

    return (
      <div>

        {modalPresented &&
          <div>
            <TaskModal setModalPresented={setModalPresented} modalTask={modalTask} projects={projects}/>
          </div>
        }
  
        <header className={`${modalPresented && "pointer-events-none"}`}>
          <AddTaskForm globalTasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects}/>
          <TodayView tasks={tasks} setTasks={setTasks} invokeModal={invokeModal} />
          <TaskList tasks={tasks} projects={projects} setTasks={setTasks} invokeModal={invokeModal} /> 
          <CompletedView tasks={tasks} setTasks={setTasks} invokeModal={invokeModal} />
        </header>
      </div>
    )
}

export default TaskPage;
