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

    const [modalTitle, setModalTitle] = useState('Undefined Title')
    const [modalContent, setModalContent] = useState('Undefined Content')

    const invokeModal = (t) => {
      setModalTitle(t.text)
      setModalContent(t.notes)
      setModalPresented(true)
    }

    return (
      <div>

        {modalPresented &&
          <div>
            <TaskModal setModalPresented={setModalPresented} modalTitle={modalTitle} modalContent={modalContent} />
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
