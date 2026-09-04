import React, { useState } from 'react';
import './SDash.css';
import { Navigate,useNavigate,useParams } from 'react-router-dom';



const StudentDashboard = () => {
  const {id} = useParams();
  const [accepted, setAccepted] = useState(false);


  const handleAcceptanceChange = () => {
    setAccepted(!accepted);
  };

  const navigate = useNavigate();

  const handleStartExam = () => {
    if (accepted) {
      // Perform actions to start the exam
      navigate(`/StudentExam/${id}`);
    } else {
      alert('Please accept the terms before starting the exam.');
    }
  };

  return (
    <div className='card' style={{marginLeft:"320px",width:"60%",padding:"30px",boxShadow:"7px 7px 8px rgba(126,128,130,0.7)"}} >
      <h1 style={{paddingBottom:"25px"}}>Online Exam Instructions</h1>
      <p><b style={{fontSize:"20px"}}>
        Welcome to the online exam.<br/> Please read the following instructions carefully before proceeding.
        </b>
      </p>
      <ol>
        <li>Ensure you have a stable internet connection.</li>
        <li>Do not use any unauthorized materials during the exam.</li>
        <li>Check the box below to indicate your acceptance of the exam terms.</li>
      </ol>
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={handleAcceptanceChange}
        />
        <b style={{paddingLeft:"10px"}}>
        I accept the terms and conditions
        </b>
      </label>
      <br />
      <button onClick={handleStartExam}  style={{width:"200px",backgroundColor:"#4caf50"}}>Start Exam</button>
      {/* <p studentId={id}>ID : {id}</p> */}
    </div>
  );
};

export default StudentDashboard;
