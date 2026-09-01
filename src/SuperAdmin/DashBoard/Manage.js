import React ,{useState,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Manage.css';
import SuperSidebar from './SuperSidebar';
import { useStudentContext } from '../../Admin/StudentContext';


const Manage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  
  //const [showNav, setShowNav] = useState(true);
  //const [generatedCredentials, setGeneratedCredentials] =useState({});

  const [studentPasswords, setStudentPasswords] = useState({});
  const students = location.state && location.state.students ? location.state.students : [];
  const generatedId = location.state && location.state.generatedId ? location.state.generatedId:null;
  
  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem('studentPasswords')) || {};
    setStudentPasswords(storedPasswords);
  }, []);


const generateRandomPassword = () => {
  return Math.random().toString(36).substring(7);
};


const handleApprove = (student) => {
  let newPassword;

  if (studentPasswords[student.id]){
    newPassword = studentPasswords[student.id];
  }
  else{
    newPassword = generateRandomPassword();
    localStorage.setItem('studentPasswords',JSON.stringify({...studentPasswords,[student.id]:newPassword}));
  
    setStudentPasswords({...studentPasswords,[student.id]:newPassword});
  }
  
  
  const index = students.findIndex((s) => s === student);

  const updatedStudents = [...students];
  updatedStudents[index] = {
    ...student,
    
    password: newPassword,
    
  };

   
   navigate('/AManage', {
    state: {
      students: updatedStudents,
      credentials: {
        id: student.id,  
        password: newPassword,
      },
    },
  });
};


  return (
<>
<div className="table-container"> 
  <SuperSidebar/>   
<div>
      {students && students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Course</th>
              <th>Fees</th>
              <th>Request</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.mobile}</td>
                <td>{student.address}</td>
                <td>{student.course}</td>
                <td>{student.fees}</td>
                <td>
                  <button onClick={() => handleApprove(student,generatedId)} style={{width:"70px"}}>
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students to display.</p>
      )}
    </div>
    </div>      
    
    </>


  );
};

export default  Manage;


