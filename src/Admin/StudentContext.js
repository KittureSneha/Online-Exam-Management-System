import React, { createContext, useContext, useEffect, useState } from 'react';


const StudentContext = createContext();

export const useStudentContext = () => {
  return useContext(StudentContext);
};

export const StudentProvider = ({ children}) => {
  const [students, setStudents] = useState([]);
  const [nextId, setNextId] = useState(() => {
  const storeNextId = localStorage.getItem('nextId'); 
  
  return storeNextId ? parseInt(storeNextId,10) : 101;
  }); 

  const addStudent = (newStudent) => {
    const updatedNextId = nextId + 1;

    const studentWithId = { 
      ...newStudent, 
      id: nextId,
      name : newStudent.name,
      dob : newStudent.dob,
      address : newStudent.address,
      gender : newStudent.gender,
      course: newStudent.course,
      fees : newStudent.fees,
 };
    setStudents((prevStudents) => [...prevStudents, studentWithId]);
    setNextId((prevNextId) => {
      const updatedNextId = prevNextId + 1;
      localStorage.setItem('nextId',updatedNextId);
      return updatedNextId;
    }); 
    localStorage.setItem(`studentID_${nextId}`,JSON.stringify(studentWithId));
    setNextId(updatedNextId);
  };

  useEffect(() => {
    localStorage.setItem('nextId',nextId);
  },[nextId]);

  return (
    <StudentContext.Provider value={{ students, addStudent,nextId }}>
      {children}
    </StudentContext.Provider>
  );
};

