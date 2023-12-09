import React from 'react'
import './Card.css'

const Card = ({emp}) => {
  return (
    <div class="employee-card">
        
        <p>EMP ID : <span>{emp.EMP_ID}</span></p>
        <p>Name : <span>{emp.Name}</span></p>
        <p>DOB : <span>{emp.DOB}</span></p>
        <p>Role : <span>{emp.Role}</span></p>
        
    </div>
  )
}

export default Card