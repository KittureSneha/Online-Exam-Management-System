

//          Student Registration From Code          //

import React, { useState,useHistory } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Admin.css';
import { Link, useNavigate } from 'react-router-dom';
import AManage from './AManage'
import Sidebar from './Sidebar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useStudentContext } from './StudentContext';
import { v4 as  uuidv4} from 'uuid';



function AdminDashboard() {

  const { addStudent ,nextId} = useStudentContext();

  const navigate = useNavigate();

  const [students, setStudents] = useState('');
  const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [gender,setGender] = useState('');
  const [dob,setDob] = useState('');
  const [course,setCourse] = useState ('');
  const [fees,setFees] = useState('');
  const [address,setAddress]=useState('');
  

  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const [submitted,setSubmitted]=useState('');

  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
    } 
    else if (!/[A-Za-z]/.test(name)) {
      setNameError('Invalid name');
    } 
      
    else {
      setNameError('');
    }
  };

  const validateMobile = () => {
    if (!mobile) {
      setMobileError('Mobile number is required');
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMobileError('Invalid mobile number');
    } else if (/^(\d)(\1{4})$/.test(mobile.substring(0, 5))) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,dob,mobile,address,gender,course,fees);

      if (name !== '' && dob !== '' && mobile !== '' && address !== '' && gender !== '' 
          && course !== '' && fees !=='' ) {
      
        
        setSubmitted(true);
        

        setName('');
        setGender('');
        setMobile('');
        setDob('');
        setAddress('');
        setCourse('');
        setFees('');

        

        const studentID = uuidv4();

        const newStudent = {
          id: nextId,
          name,
          dob,
          mobile,
          address,
          gender,
          course,
          fees,
        };
        addStudent(newStudent);
        navigate('/AManage');
  
          } else {
            alert('Please fill in all fields.');
          } 
    };


  return (
    <>
    <div>
    <Sidebar/>
    </div>

    <div className="pt-4 pb-4">
    <div className='container card all'>
    <Form onSubmit={handleSubmit}>
      <header className='Heading' style={{marginLeft:"25px"}}>Student Registration</header>

      <Row className="mb-4 col-md-10">
        <Form.Group as={Col} controlId="formGridName" className='col-md-4'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control 
          type="text"
           placeholder="Enter Full Name" 
           value={name}
           onChange={(e)=> setName(e.target.value)}
           onBlur={validateName}/>
          {nameError && <p style={{color:"red"}}>{nameError}</p>}

        </Form.Group>


        <Form.Group as={Col} controlId="formGridMobile" className='col-md-3'>
          <Form.Label>Mobile</Form.Label>
          <Form.Control
           type="text"
            placeholder="Enter Mobile No."
            value={mobile}
            maxLength={10}
            onChange={(e)=> setMobile(e.target.value)}
            onBlur={validateMobile}          
             />
           { mobileError && <p style={{color:"red"}}>{mobileError}</p>}

        </Form.Group>

      </Row>
      <Row className='mb-4'>
      <Form.Group className="mb-3 col-md-5" controlId="formGridAddress1" 
      style={{marginLeft:"10px"}}>
        <Form.Label>Address</Form.Label>
        <Form.Control 
        placeholder="Enter Address" 
        value={address}
        onChange={(e) => setAddress(e.target.value)}/>
      </Form.Group>
      </Row>

  <Row className='mb-4'>
      <Form.Group className="mb-3 col-md-3" controlId="formGridDob" style={{marginLeft:"10px"}}>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control 
        type='date'
        value={dob}
        onChange={(e) => setDob(e.target.value)} />
      </Form.Group> 

      
      
        <Form.Group 
        style={{marginLeft:"40px"}}
        value={gender}
        as={Col} 
        className="mb-3"
        onChange={(e) => setGender(e.target.value)}
        >
          <Form.Label as="legend" column sm={2} >
            Gender
          </Form.Label>
          
            <Form.Check
              type="radio"
              label="Male"
              value="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              
            />
            <Form.Check
              type="radio"
              label="Female"
              value="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />

         </Form.Group>
      
      </Row>


      <Row className="mb-4 col-md-8">

        <Form.Group
         
        as={Col} 
        controlId="formGridCourse"
        className='col-md-4'>
          <Form.Label>Course</Form.Label>
          <Form.Select 
          defaultValue="Courses"
          value={course}
          onChange={(e) => setCourse(e.target.value)}>
            <option>Select Course</option>
            <option>Engineering</option>
            <option>MBBS</option>
            <option>MBA</option>
            <option>Architect</option>
            <option>LAW</option>
            <option>Journalism</option>
            <option>Arts & Designing</option>
            <option>Crime Department</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity" className='col-md-5'>
          <Form.Label>Fees</Form.Label>
          <Form.Control 
          placeholder='Enter value'
          type='text'
          value={fees}
          onChange={(e) => setFees(e.target.value)}
           />
        </Form.Group>
  </Row>

     {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      */}

      <Button
        
       type="submit"
       className='sub-button' >
        Submit
      </Button> 
      
    </Form>
    </div>

    </div> 
    </>   
 
  )
}

export default AdminDashboard;