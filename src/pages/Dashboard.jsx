import React, { useState } from 'react'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import './Dashboard.css'
import EmployeeProductivity from '../components/EmployeeProductivity'
import EmployeeList from '../components/EmployeeList'
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Dashboard = () => {
    const[dashboard,setDashboard] = useState(true);
    return (
        <div class="dashboard-container">
            <img src={logo2} alt="" class="dashboard-logo1" />
            <img src={logo3} alt="" class="dashboard-logo2" />
            <p class="super-script">4</p>
            <div>
                {
                    dashboard ? <EmployeeProductivity /> : <EmployeeList />
                }
                
            </div>

            <div class="bottom-navbar">
                <div class={dashboard ? "hoverEffect home-icon" : "home-icon"} >
                    <FaHome size="25px"
                        color="green" onClick={()=> setDashboard(!dashboard)}/>
                </div>

                <div class={dashboard ? "person-icon" : "hoverEffect person-icon"}>
                    <IoMdPerson size="25px"
                        color="green" onClick={()=> setDashboard(!dashboard)} />
                </div>

            </div>
        </div>
    )
}

export default Dashboard