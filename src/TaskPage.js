import React from 'react'
import { useState } from 'react'

import './index.css';
import './App.css';

import AddTaskForm from './components/AddTaskForm'
import TaskList from './components/TaskList'
import TodayView from './components/TodayView'
import CompletedView from './components/CompletedTasksView'

import TaskModal from './components/task_components/TaskModal'
import DeleteModal from './components/task_components/DeleteConfirmModal'

function TaskPage({tasks, setTasks, projects, setProjects, refreshInfo}) {
    const [modalPresented, setModalPresented] = useState(false)
    const [deleteModalPresented, setDeleteModalPresented] = useState(false)

    const [modalTask, setModalTask] = useState(tasks[0])

    const invokeModal = (t, type) => { // t-task type-modal
      if(type === 1){
        invokeDetailModal(t)
      }
      if(type === 2){
        invokeDeleteModal(t)
      }
    }

    const invokeDetailModal = (t) => {
      console.log("Showing task modal for task", t.id, t.text)
      setModalTask(t)
      setModalPresented(true)
    }

    const invokeDeleteModal = (t) => {
      console.log("Delete modal is presented", t.id, t.text)
      setModalTask(t)
      setDeleteModalPresented(true)
    }

    const deleteTask = (id) => {
        console.log('delete', id)
        setTasks(tasks.filter((task) => task.id !== id))
        setDeleteModalPresented(false)
    }

    return (
      <div>

        {modalPresented &&
          <div>
            <TaskModal setModalPresented={setModalPresented} modalTask={modalTask} projects={projects}/>
          </div>
        }

        {deleteModalPresented &&
          <div>
            <DeleteModal setModalPresented={setDeleteModalPresented} modalTask={modalTask} onDelete={deleteTask}/>
          </div>
        }
  
        <header className={`${modalPresented && "pointer-events-none"}`}>
          <AddTaskForm globalTasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} refreshInfo={refreshInfo}/>
          <TodayView tasks={tasks} projects={projects} setTasks={setTasks} invokeModal={invokeModal} />
          <TaskList tasks={tasks} projects={projects} setTasks={setTasks} invokeModal={invokeModal} refreshInfo={refreshInfo}/> 
          <CompletedView tasks={tasks} setTasks={setTasks} invokeModal={invokeModal} />
        </header>
      </div>
    )
}

export default TaskPage;
