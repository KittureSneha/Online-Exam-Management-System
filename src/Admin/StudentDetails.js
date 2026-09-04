 import React,{useEffect, useState} from 'react';
 import { useStudentContext } from './StudentContext';
 import './SDetails.css'; 
 import Sidebar from "./Sidebar";
 import { Link, useNavigate } from 'react-router-dom';


 const StudentDetails = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);


  useEffect(() => {
    const studentData = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
  
      if (key.startsWith('studentID_')) {
        const student = JSON.parse(localStorage.getItem(key));
  
        if (student && typeof student.id === 'number') {

          studentData.push(student);
        }
      }
    }
  

    studentData.sort((a, b) => a.id - b.id);
  
    setStudents(studentData);
  }, []);




  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  
  const handleCertificateClick = (studentId,studentName, course, marks) => {
    // Navigate to the certificate page
    navigate(`/Certificate/${studentId}`, { state: { studentName, course, marks } }); // Replace '/certificate' with the actual path of your certificate page
  };


  

  return (
    <div>
      <Sidebar />
      <div className="student-info-container">
        <h2>All Students</h2>
        {students.length > 0 ? (
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
                <th>Marks</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Certificate</th>
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
                  <td>{student.marks}</td>

                  <td>
                    <Link to={`/Edit/${student.id}`} ><button style={{marginLeft:"10px",marginBottom:"6px"}}>Edit</button></Link>
                  </td>

                  <td>
                    <button onClick={() => handleDelete(student.id)} style={{marginLeft:"10px",marginBottom:"6px"}}>
                      Delete
                    </button>
                  </td>

                  
                  <td>
                    <button onClick={() => handleCertificateClick(student.id,student.name, student.course, student.marks)} style={{marginLeft:"10px",marginBottom:"6px"}}>
                      Certificate
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found.</p>
        )}


      </div>
    </div>
  );
};

export default StudentDetails;




// const StudentTable = () => {
//   const { students } = useStudentContext();
//   const [student, setStudent] = useState([]);

//   useEffect(() => { 
//         const studentData = [];
//         for (let i = 0; i < localStorage.length; i++) {
//            const key = localStorage.key(i);
//            if (key.startsWith('studentID_')) {
//              const student = JSON.parse(localStorage.getItem(key));
//              studentData.push(student);
//            }
//          }
//          studentData.sort((a, b) => a.id - b.id);
//      setStudent(studentData);
//  }, []);

//   return (
//     <>
//     <Sidebar />
    
//   <div className="student-info-container">
//     <h2>All Students</h2>
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Mobile</th>
//             <th>Address</th>
//             <th>Date of Birth</th>
//             <th>Gender</th>
//             <th>Course</th>
//             <th>Fees</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.name}</td>
//               <td>{student.dob}</td>
//               <td>{student.gender}</td>
//               <td>{student.mobile}</td>
//               <td>{student.address}</td>
//               <td>{student.course}</td>
//               <td>{student.fees}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//     </>
//   );
// };

// export default StudentTable;
