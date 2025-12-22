import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage'

const App = () => {
  // useEffect(()=>{
  //   getLocalStorage()
  // },)
  const [user,setUser]= useState(null);
  const handleLogin=(email,password)=>{
    // if(email== 'aadmin@company.com' )
   
    
  }
  handleLogin()
  return (
   <>
   {!user ? <Login/> : ''}
   
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
   </>
  )
}

export default App
