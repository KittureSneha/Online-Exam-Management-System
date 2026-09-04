import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
    const handleLogout = () => {
      navigate('/')
    }

  return (
    

<nav class="navbar sticky-top bg-body-tertiary">

  <div className='container-fluid' onClick={handleLogout} style={{justifyContent:"right"}}>
    <i className='bi bi-box-arrow-left nav_icon' style={{color:"black",marginRight:"10px"}}></i>
    <a> <Link style={{color:"black",textDecoration:"none",fontSize:"20px",fontWeight:"500"}}>Logout</Link></a>
  </div>

  </nav>
 )
}

