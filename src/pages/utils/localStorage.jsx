const employee = [
  {
    id: 1,
    email: "rahul@company.com",
    password: "rahul@123",
    tasks: [
      {
        title: "Design Login UI",
        description: "Create modern login screen UI",
        date: "2025-01-10",
        category: "Design",
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve responsive issue in navbar",
        date: "2025-01-08",
        category: "Development",
        active: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Review",
        description: "Prepare design review for client",
        date: "2025-01-05",
        category: "Meeting",
        active: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    email: "ankit@company.com",
    password: "ankit@123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate login API",
        date: "2025-01-12",
        category: "Backend",
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Create daily DB backup script",
        date: "2025-01-09",
        category: "Database",
        active: false,
        completed: true,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Improve API error responses",
        date: "2025-01-06",
        category: "Backend",
        active: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    email: "neha@company.com",
    password: "neha@123",
    tasks: [
      {
        title: "Dashboard UI",
        description: "Design admin dashboard layout",
        date: "2025-01-11",
        category: "Design",
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Color Palette",
        description: "Finalize app color palette",
        date: "2025-01-07",
        category: "Design",
        active: false,
        completed: true,
        failed: false
      },
      {
        title: "UX Research",
        description: "Conduct user experience research",
        date: "2025-01-04",
        category: "Research",
        active: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    email: "priya@company.com",
    password: "priya@123",
    tasks: [
      {
        title: "Testing Login Flow",
        description: "Test all login edge cases",
        date: "2025-01-13",
        category: "Testing",
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Report",
        description: "Document found bugs",
        date: "2025-01-09",
        category: "Testing",
        active: false,
        completed: true,
        failed: false
      },
      {
        title: "Automation Setup",
        description: "Setup automation testing tools",
        date: "2025-01-06",
        category: "Testing",
        active: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    email: "rohit@company.com",
    password: "rohit@123",
    tasks: [
      {
        title: "Deploy Project",
        description: "Deploy app on production server",
        date: "2025-01-14",
        category: "Deployment",
        active: true,
        completed: false,
        failed: false
      },
      {
        title: "Server Setup",
        description: "Configure server environment",
        date: "2025-01-08",
        category: "DevOps",
        active: false,
        completed: true,
        failed: false
      },
      {
        title: "Downtime Fix",
        description: "Fix unexpected server downtime",
        date: "2025-01-05",
        category: "DevOps",
        active: false,
        completed: false,
        failed: true
      }
    ]
  }
];



const admin=[{"admin": {
    "id": 101,
    "email": "admin@company.com",
    "password": "admin@123"
  }}]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))
console.log(employees,admin);

 return{employee,admin}
}