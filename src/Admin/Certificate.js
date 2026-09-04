 import React, { useEffect, useState, useRef } from 'react';
 import { useParams } from 'react-router-dom';
 import './Certificate.css';
 import Sidebar from './Sidebar';
 import jsPDF from 'jspdf';
 import html2canvas from 'html2canvas';



const Certificate = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [grade, setGrade] = useState('');
  const certificateRef = useRef();



  useEffect(() => {
    const totalMarksData = JSON.parse(localStorage.getItem('totalMarks')) || {};
    const marks = totalMarksData[id] || 0;

    let newGrade = '';
     if (marks >= 18) 
     
    {
      newGrade = 'A+';
    }
     else if (marks >= 14) 
    {
      newGrade = 'A';
    }
     else if (marks >= 10) 
    {
      newGrade = 'B';
    } 
     else if (marks >= 8) 
    {
      newGrade = 'C';
    }
     else
    {
      newGrade = 'F';
    }

    setGrade(newGrade);

    const studentData = JSON.parse(localStorage.getItem(`studentID_${id}`));
    setStudent(studentData);
    }, [id]);


    const handleSavePDF = () => {
      const element = certificateRef.current;
    
      if (!element) {
        console.error("Certificate element not found");
        return;
      }
    
      const scrollY = -window.scrollY;
    
      
      html2canvas(element, { scrollY, scale: 3 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('25', 'px', [canvas.width / 3, canvas.height / 3]); 
        pdf.addImage(imgData, 'PNG', 2, 1, canvas.width / 3, canvas.height / 3); 
        pdf.save('certificate.pdf');
      });
    };
    


  return (
    <div>
    <Sidebar />
    <div className="certificate-container">
      
      <div className='certificate-image' ref={certificateRef}  >

      {student && (
        <div className="certificate-content">
          <div className="certificate-text">

            <h1 style={{position:"absolute",left:"5%",top:"-160px",color:"#383636",fontSize:"70px",fontFamily:"Old EnglishFive",fontWeight:"bold"}}>
              CERTIFICATE
            </h1>
            
            <p style={{marginLeft:"110px",fontSize:"18px"}}>
              This certificate is proudly presented to 
            </p>

              
              <strong style={{marginLeft:"-20px",fontSize:"25px",fontFamily: " Calibri ",fontStyle:"italic",fontWeight:"bold",color:"#0d0d5e",borderBottom:"2px solid #0d0d5e"}}> 
                Mr/Ms. {student.name}
              </strong> 
              <br />

            <p style={{fontSize:"18px"}}>  on successful completion of the

              <strong style={{fontSize:"20px",color:"#0d0d5e"}}> {student.course} </strong> course with grade

              <strong style={{fontSize:"20px",color:"#0d0d5e"}}> {grade} </strong>
              
            </p>

              
            <p style={{marginLeft:"100px",fontSize:"35px",fontFamily: "Old EnglishFive",fontStyle:"regular",fontWeight:"bold",color:"#c4982d" }}>
              <strong> CONGRATULATIONS ! </strong> 
            </p>
            
                

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "10px", marginRight: "60px" }}>
             
                  <div>
                    <p style={{ fontSize: "18px", marginLeft: "60px", marginTop: "55px", position: "absolute", borderBottom:"1px solid black", width:"150px", textAlign:"center",color:"#0d0d5e"}}><b>{new Date().toLocaleDateString()}</b></p>
                    <p style={{ fontSize: "20px", marginLeft: "110px", marginTop: "88px", position: "absolute" }}>Date</p>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "53px" }}>_____________________</p>
                    
                    <p style={{ fontSize: "18px",marginLeft:"20px" }}>Mr ABCD WXYZ</p>
                    <p style={{ fontSize: "16px",marginLeft:"50px",marginTop:"-14px" }}>Director</p>
                  </div>

          </div>

          </div>
        </div>
      )}
    </div>
    </div>
        <button  style={{width:"10%",marginLeft:"50%"}} onClick={handleSavePDF}>Save Certificate</button>

    </div>
  );
};

 export default Certificate;

