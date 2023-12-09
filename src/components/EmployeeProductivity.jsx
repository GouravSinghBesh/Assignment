import React from 'react'
import './EmployeeProductivity.css'

const EmployeeProductivity = () => {
    return (
        <div class="EmployeeProductivity-container">
            <div class="title-container">
                <p class="empProTitle">Employee Productivity Dashboard</p>
            </div>
            <div class="productivity-chart">
                <div>
                    <p>Productivity On Monday</p>
                    <div className='h-[11px] w-[6px] bg-[#36A54680] border-[1px] border-[#36A546] rounded-md'></div>
                </div>
                <div className='text-[#36A546]'>
                    4%
                </div>

                <div>
                    <p>Productivity On Tuesday</p>
                    <div  className='h-[11px] w-[140px] bg-[#36A54680] border-[1px] border-[#36A546] rounded-md'></div>
                </div>
                <div className='text-[#36A546]'>
                    92%
                </div>

                <div>
                    <p>Productivity On Wednesday</p>
                    <div  className='h-[11px] w-[183px] bg-[#36A54680] border-[1px] border-[#36A546] rounded-md'></div>
                </div>
                <div className='text-[#36A546]'>
                    122%
                </div>

                <div>
                    <p>Productivity On Thursday</p>
                    <div  className='h-[11px] w-[132px] bg-[#36A54680] border-[1px] border-[#36A546] rounded-md'></div>
                </div>
                <div className='text-[#36A546]'>
                    93%
                </div>

                <div>
                    <p>Productivity On Friday</p>
                    <div  className='h-[11px] w-[132px] bg-[#36A54680] border-[1px] border-[#36A546] rounded-md'></div>
                </div>
                <div className='text-[#36A546]'>
                    89%
                </div>

                <div>
                    <p>Productivity On Saturday</p>
                    <div  className='h-[11px] w-[146px] bg-[#36A54680] border-[1px] border-[#36A546] rounded-md'></div>
                </div>
                <div className='text-[#36A546]'>
                    98%
                </div>
            </div>


        </div>
    )
}

export default EmployeeProductivity