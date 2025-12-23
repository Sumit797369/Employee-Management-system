import React from 'react'
import Header from '../others/Header'
import TaskListsNumber from '../others/TaskListsNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div>
      <div className='p-10 bg-white h-screen'>
        <Header/>
        <TaskListsNumber/>
        <TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
