import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AManage.css';
import './Admin.css'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useStudentContext } from './StudentContext';

  

const AManage = () => {
  const location = useLocation();
  const { students } = useStudentContext();
  const navigate = useNavigate();
  const credentials = location.state && location.state.credentials ? location.state.credentials : null;

  const handleRequest = () => {

    navigate('/Manage', { state: { students } });

 }

  return (
    <>
    <div className='table-container'>
      <Sidebar />
    
    <div>
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
              <th>Request</th>

              {credentials && (
                    <>
                      <th>Password</th>
                    </>
                  )}

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
                  {student.approved ? (
                    <button disabled>Approved</button>
                  ) : (
                    <button onClick={() => handleRequest()}>Request</button>
                  )
                  
                  }
                </td>


                {credentials && credentials && index === students.length - 1 && (
                <>
                  <td>{credentials.password}</td>
                </>
                    )}
                  

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

  
//   const navigate = useNavigate();
//  // const [showNav, setShowNav] = useState(true); 
//   const location = useLocation();
//   const { students } = useStudentContext();

//   const credentials = location.state && location.state.credentials ? location.state.credentials : null;
 
  
// const handleRequest = () => {

//   if (credentials && credentials.password) {
//     localStorage.setItem('studentsData', JSON.stringify(students));
//     localStorage.setItem('generatedPassword', credentials.password);
//   }

//   navigate('/Manage',{state :{students  }});
  
// }
 
//   return (
//   <>
//   <div className="table-container"> 
//   <Sidebar/>   
//   <div>
//       {students && students.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Date of Birth</th>
//               <th>Gender</th>
//               <th>Mobile</th>
//               <th>Address</th>
//               <th>Course</th>
//               <th>Fees</th>
//               <th>Request</th>
              

//               {credentials && (
//                     <>
//                           <th>Password</th>
                          
//                     </>
//                   )}

//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.dob}</td>
//                 <td>{student.gender}</td>
//                 <td>{student.mobile}</td>
//                 <td>{student.address}</td>
//                 <td>{student.course}</td>
//                 <td>{student.fees}</td>
               
//                 <td>
//                   <button onClick={ handleRequest} style={{width:"70px"}}>Request</button>
//                 </td>

//                 {credentials && credentials && index === students.length - 1 && (
//                 <>
                  
//                   <td>{credentials.password}</td>
                  
//                 </>
//                     )}
                    
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p></p>
//       )}
//     </div>
//     </div>

  
//     </>


//   );
// };

export default AManage;         