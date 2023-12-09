
import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute'

export const allEmployeeslist = [{
  EMP_ID: 1,
  Name: 'Arjun',
  DOB: '16-11-2000',
  Role: 'Software Engineer'
},
{
  EMP_ID: 2,
  Name: 'Mahesh',
  DOB: '1-7-1996',
  Role: 'Frontend Engineer'
},
{
  EMP_ID: 3,
  Name: 'Alok',
  DOB: '13-7-1998',
  Role: 'Backend Engineer'
},
{
  EMP_ID: 4,
  Name: 'Milan',
  DOB: '15-08-1997',
  Role: 'Doctor'
},
{
  EMP_ID: 5,
  Name: 'Vishal',
  DOB: '22-3-1995',
  Role: 'Scientist'
},
{
  EMP_ID: 6,
  Name: 'Vishwajeet',
  DOB: '11-4-1999',
  Role: 'Worker'
},
]

function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  return (
    <div className='flex flex-row gap-5'>
      <Routes>
        <Route path="/" element={<Login setIsloggedin={setIsloggedin} />} />


        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
