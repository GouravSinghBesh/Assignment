import React, { useEffect, useState } from 'react'
import './EmployeeList.css'
import { IoSearchOutline } from "react-icons/io5";
import { allEmployeeslist } from '../App';
import Card from './Card';

const EmployeeList = () => {
  const [searchEmp, setSearchEmp] = useState("");
  const[employeelist,setEmployeelist] = useState([]);

  useEffect(() => {
    setEmployeelist(allEmployeeslist);
  }, [])
  

  const searchEmployee = (title)=>{
     const empName =  allEmployeeslist.filter( data => data.Name == title)
     console.log(empName);
     setEmployeelist(empName);
  }
  return (
    <div class="employee-container">
      <div>
        <input type="text" value={searchEmp} placeholder='Search With Name' onChange={(e) => { setSearchEmp(e.target.value)  }} class="search-bar"/>
        <IoSearchOutline class="search-icon" onClick={()=>searchEmployee(searchEmp)}/>
        <div class="emp-card">
          {employeelist.map((emp)=>(<Card key={emp.EMP_ID} emp={emp}/>))}
        </div>
      </div>
      

    </div>
  )
}

export default EmployeeList