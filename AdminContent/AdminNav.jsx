import React from 'react'
import '../../asserts/Navbar.css'   
import {Button} from '@mui/material'   
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const navigate=useNavigate();
  return (
    <div>
      <nav className="navbar">
        {/* <div>
          <img src={logo} alt="CHESS ARCHADE" />
        </div> */}
        <h2 style={{color:'white',userSelect:'none'}}>CHESS ARCHADE</h2>
        {/* <div className="navbar-logo">CHESS ARCHADE</div> */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Button variant="outlined" onClick={()=> navigate('/ManageCourses')}>ManageCourses</Button>
          </li>
          <li className="navbar-item">
            <Button variant="outlined" onClick={()=> navigate('/ManageUsers')}>ManageUsers</Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminNav
