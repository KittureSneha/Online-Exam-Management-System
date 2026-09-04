import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg"  style={{color:"white"}}>
      <Container fluid>
        {/*
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
        
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Login</Link></Nav.Link>
            <Nav.Link><Link to="/Exam">Exam</Link></Nav.Link>
            <NavDropdown title="Centers" id="basic-nav-dropdown">
               <Nav.Link><Link to="/AllCenters">All Centers</Link></Nav.Link>
               <Nav.Link><Link to="/AddCenter">Add Centers</Link></Nav.Link>
               <Nav.Link><Link to="/Manage">Manage</Link></Nav.Link>
               </NavDropdown>
          </Nav>
      

        </Navbar.Collapse>
      */}
      </Container>
    </Navbar>
  );
}

export default Header;