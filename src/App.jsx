import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // null | "admin" | "employee"
  const [loggedInUserData,setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
// useEffect(()=>{
//   if(authData){
// const loggedInUser =  localStorage.getItem('loggedInUser')
// if(loggedInUser){
//   setUser(loggedInUser.role)
// }
//   }
// },[authData])


  const handleLoginn = (email, password) => {
    if (email === "admin@company.com" && password === "admin@123") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData ) {
      const employee = authData.employee.find((e)=>{email == e.email && e.password == password})
      if(employee){

        setUser("employee"); 
        // setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    } else {
      alert("Invalid credentials");
    }
  };

  const data = useContext(AuthContext)
  console.log(data);
  
  return (
    <>
      {!user && <Login handleLogin={handleLoginn} />}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData}/>}
    </>
  );
};

export default App;
