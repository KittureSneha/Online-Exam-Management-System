import React, { useState } from 'react';
import './SuperSidebar.css';
import { Link,useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [showNav, setShowNav] = useState(true);

    const navigate = useNavigate();
    const handleLogout = () => {
      navigate('/')
    }
;

  return <div >
       <header > 
        <div className="header_toggle" >
          <i />
        </div>
      </header>
      <div className={`l-navbar${showNav ? ' show' : ''}`}>
        <nav className="nav">
          <div>
            <p className="nav_logo">
              <i className="bi bi-alexa nav_logo-icon" />
              <span className="nav_logo-name" style={{ color: 'lightpink', marginRight: '100%' }}>
                SuperAdmin Dashboard
              </span>
            </p>

           
            <div className="nav_list">
              <a href="" className="nav_link" rel="noopener">
                <i className="bi bi-buildings nav_icon" />
                <span className="nav_name">
                  <Link to="/AllCenters" style={{ color: "white",textDecoration:"none" }}>
                    All Centers
                  </Link>
                </span>
              </a>
            </div>

            <div className="nav_list">
              <a href="" className="nav_link" rel="noopener">
                <i className="bi bi-building-fill-add nav_icon" />
                <span className="nav_name">
                  <Link to="/AddCenter" style={{ color: "white",textDecoration:"none" }}>
                    Add center
                  </Link>
                </span>
              </a>
            </div>

            <div className="nav_list">
              <a href="" className="nav_link" rel="noopener">
                <i className="bi bi-person-check-fill nav_icon" />
                <span className="nav_name">
                  <Link to="/Manage" style={{ color: "white",textDecoration:"none" }}>
                    Manage
                  </Link>
                </span>
              </a>
            </div>

           

            <div className="nav_list">
            <p className="nav_link" >
              <i className="bi bi-mortarboard-fill nav_icon" />
              <span className='nav_name'>
              <Link style={{color:"white", textDecoration:"none"}} to='/Exam'>
                Exam
              </Link>
              </span>
            </p>
            </div>

            <div className="nav_list">
            <p className="nav_link" onClick={handleLogout}>
              <i className="bi bi-box-arrow-left nav_icon" />
              <span className='nav_name'>
              <Link style={{color:"white", textDecoration:"none"}} to='/'>Logout</Link>
              </span>
            </p>
            </div>


          </div>
        </nav>
      </div>
    </div>
  
}
