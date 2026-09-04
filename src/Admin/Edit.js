import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStudentContext } from './StudentContext';
import './Edit.css';
import Sidebar from './Sidebar';

const EditStudent = () => {
  const { id } = useParams();     
  const navigate = useNavigate();
  const { students, addStudent } = useStudentContext();

  const [editedStudent, setEditedStudent] = useState({
    name: '',
    dob: '',  
    address: '',
    gender: '',
    course: '',
    fees: '',
  });

  // useEffect(() => {
  //   const allStudents = [];
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     if (key.startsWith('studentID_')) {
  //       const student = JSON.parse(localStorage.getItem(key));
  //       allStudents.push(student);  
  //     }
  //   }

  //   const studentToEdit = allStudents.find((student) => student.id === parseInt(id, 10));

  //   if (studentToEdit) {
  //     setEditedStudent(studentToEdit);
  //   } else {
  //     console.error("Student not found");
  //   }
  //   const totalMarksData = JSON.parse(localStorage.getItem('totalMarks')) || {};
  //   const marks = totalMarksData[id] || '';
  //   setEditedStudent((prevStudent) => ({...prevStudent ,marks}));

  // }, [id]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  // };

  // const saveChanges = () => {
  //   const updatedStudents = students.map((student) =>
  //     student.id === parseInt(id, 10) ? editedStudent : student
  //   );

  //   localStorage.setItem(`studentID_${id}`, JSON.stringify(editedStudent));

  //   navigate('/StudentDetails');
  // };

  
  useEffect(() => {
    const allStudents = [];
    for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('studentID_')) {
      const student = JSON.parse(localStorage.getItem(key));
      allStudents.push(student);
    }
  }

  const studentToEdit = allStudents.find((student) => student.id === parseInt(id, 10));

  if (studentToEdit) {
    setEditedStudent(studentToEdit);
  } else {
    console.error("Student not found");
  }
  const totalMarksData = JSON.parse(localStorage.getItem('totalMarks')) || {};
  const marks = totalMarksData[id] || ''; 
  setEditedStudent((prevStudent) => ({ ...prevStudent, marks }));

}, [id]);

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setEditedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
};

const saveChanges = () => {
  const updatedStudents = students.map((student) =>
    student.id === parseInt(id, 10) ? editedStudent : student
  );

  localStorage.setItem(`studentID_${id}`, JSON.stringify(editedStudent));

  navigate('/StudentDetails');
};


  return (
    <div>
      <Sidebar />
      <div className="edit-student-container">
        <h2>Edit Student Details</h2>
        <form className="edit-student-form">


        <label className="edit-student-label">Student ID:</label>
          <input
            type="text"
            name="id"
            style={{width:"40%"}}
            value={editedStudent.id}
            onChange={handleInputChange}
            className="edit-student-input"
          />

          <label className="edit-student-label">Name:</label>
          <input
            type="text"
            name="name"
            style={{width:"90%"}}
            value={editedStudent.name}
            onChange={handleInputChange}
            className="edit-student-input"
          />
          
          
          
          <label className="edit-student-label">Address:</label>
          <input
            type="text"
            name="address"
            style={{width:"90%"}}
            value={editedStudent.address}
            onChange={handleInputChange}
            className="edit-student-input"
          />
          
          
          <label className="edit-student-label">Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            style={{width:"40%"}}
            value={editedStudent.mobile}
            onChange={handleInputChange}
            className="edit-student-input"
          />

          <label className="edit-student-label">Date of birth:</label>
          <input
            type="date"
            name="dob"
            style={{width:"40%"}}
            value={editedStudent.dob}
            onChange={handleInputChange}
            className="edit-student-input"
          />
          
  
          
          <label className="edit-student-label">Gender:</label>
          <input
           type="text"
           name="gender"
           style={{width:"40%"}}
           value={editedStudent.gender}
           onChange={handleInputChange}
           className="edit-student-input"
          />

          <label className="edit-student-label">Course:</label>
          <input
            type="text"
            name="course"
            style={{width:"40%"}}
            value={editedStudent.course}
            onChange={handleInputChange}
            className="edit-student-input"
          />

          <label className="edit-student-label">Fees:</label>
          <input
            type="text"
            name="fees"
            style={{width:"40%"}}
            value={editedStudent.fees}
            onChange={handleInputChange}
            className="edit-student-input"
          />

          <label className="edit-student-label">Marks:</label>
          <input
            type="text"
            name="marks"
            style={{width:"40%"}}
            value={editedStudent.marks}
            onChange={handleInputChange}
            className="edit-student-input"
          />


          <button type="button" 
                  onClick={saveChanges} 
                  className="edit-student-button"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};


// const EditStudent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { students, addStudent } = useStudentContext();

//   const [editedStudent, setEditedStudent] = useState({
//     name: '',
//     dob: '',  
//     address: '',
//     gender: '',
//     course: '',
//     fees: '',
//   });

//   useEffect(() => {
//       const allStudents = [];
//       for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       if (key.startsWith('studentID_')) {
//         const student = JSON.parse(localStorage.getItem(key));
//         allStudents.push(student);
//       }
//     }

//     const studentToEdit = allStudents.find((student) => student.id === parseInt(id, 10));

//     if (studentToEdit) {
//       setEditedStudent(studentToEdit);
//     } else {
//       console.error("Student not found");
//     }
//     const totalMarksData = JSON.parse(localStorage.getItem('totalMarks')) || {};
//     const marks = totalMarksData[id] || ''; 
//     setEditedStudent((prevStudent) => ({ ...prevStudent, marks }));

//   }, [id]);

//     const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
//   };

//   const saveChanges = () => {
//     const updatedStudents = students.map((student) =>
//       student.id === parseInt(id, 10) ? editedStudent : student
//     );

//     localStorage.setItem(`studentID_${id}`, JSON.stringify(editedStudent));

//     navigate('/StudentDetails');
//   };

//   return (
//     <div>
//       <Sidebar />
//       <div className="edit-student-container">
//         <h2>Edit Student Details</h2>
//         <form className="edit-student-form">
//           <div className='form-row'>
//             <div className='form-column'>
//         <label className="edit-student-label">ID:</label>
//           <input
//             type="text"
//             name="id"
//             value={editedStudent.id}
//             onChange={handleInputChange}
//             className="edit-student-input"
//           />
//           </div>
//           </div>
//           <div className='form-row'>
//           <label className="edit-student-label">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={editedStudent.name}
//             onChange={handleInputChange}
//             className="edit-student-input"
//           />
//           </div>

//           <div className='form-row'>
//           <label className="edit-student-label">Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={editedStudent.address}
//               onChange={handleInputChange}
//               className="edit-student-input"
//             />
//           </div>

//           <div className='form-row'>
//             <div className='form-column'>
//             <label className="edit-student-label">Date of birth:</label>
//             <input
//               type="date"
//               name="dob"
//               value={editedStudent.dob}
//               onChange={handleInputChange}
//               className="edit-student-input"
//             />
//             </div>
//             <div className='form-column'>
//             <label className="edit-student-label">Gender:</label>
//             <input
//               type="text"
//               name="gender"
//               value={editedStudent.gender}
//               onChange={handleInputChange}
//               className="edit-student-input"
//             />
//               </div>
//               </div>


//             <div className='form-row'>
//               <div className='form-column'>
//               <label className="edit-student-label">Course:</label>
//             <input
//               type="text"
//               name="course"
//               value={editedStudent.course}
//               onChange={handleInputChange}
//               className="edit-student-input"
//             />
//             </div>

//           <div className='form-column'>
//             <label className="edit-student-label">fees:</label>
//             <input
//               type="text"
//               name="fees"
//               value={editedStudent.fees}
//               onChange={handleInputChange}
//               className="edit-student-input"
//             />
//             </div>

//          </div>
//          <div className='form-row'>
//            <div className='form-column'>
//             <label className="edit-student-label">Marks:</label>
//             <input
//               type="text"
//               name="marks"
//               value={editedStudent.marks}
//               onChange={handleInputChange}
//               className="edit-student-input"
//             />
//             </div>
//             </div>


//             <button type="button" onClick={saveChanges} className="edit-student-button">
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };




export default EditStudent;

