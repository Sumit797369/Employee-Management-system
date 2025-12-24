// import { useState } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";
// import EmployeeForm from "../components/EmployeeForm";
// import EmployeeList from "../components/EmployeeList";
// import SearchBar from "../components/SearchBar";
// import Filter from "../components/Filter";

// export default function Dashboard() {
//   const [employees, setEmployees] = useLocalStorage("employees", []);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [search, setSearch] = useState("");
//   const [department, setDepartment] = useState("");

//   const addOrUpdateEmployee = (emp) => {
//     if (editingEmployee) {
//       setEmployees(employees.map(e => e.id === emp.id ? emp : e));
//       setEditingEmployee(null);
//     } else {
//       setEmployees([...employees, { ...emp, id: Date.now() }]);
//     }
//   };

//   const deleteEmployee = (id) => {
//     setEmployees(employees.filter(e => e.id !== id));
//   };

//   const filteredEmployees = employees.filter(emp =>
//     emp.name.toLowerCase().includes(search.toLowerCase()) &&
//     (department ? emp.department === department : true)
//   );

//   return (
//     <div className="container">
//       <h1>Employee Management System</h1>

//       <div className="top-controls">
//         <SearchBar search={search} setSearch={setSearch} />
//         <Filter department={department} setDepartment={setDepartment} />
//       </div>

//       <div className="main-layout">
//         <EmployeeForm
//           onSubmit={addOrUpdateEmployee}
//           editingEmployee={editingEmployee}
//         />

//         <EmployeeList
//           employees={filteredEmployees}
//           onEdit={setEditingEmployee}
//           onDelete={deleteEmployee}
//         />
//       </div>
//     </div>
//   );
// }
