import React from 'react'
import Header from '../others/Header'
import TaskListsNumber from '../others/TaskListsNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <div className='p-10 bg-amber-50 h-screen'>
        <Header/>
        <TaskListsNumber/>
        <TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
