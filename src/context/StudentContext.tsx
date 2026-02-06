import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ content }) => {
  const [students, setStudents] = useState([]);

  const addStudent = student => {
    const newStudent = { ...student, id: Date.now(), created_at: new Date() };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = id => {
    setStudents(students.filter(s => s.id !== id));
  };

  const updateStudent = updated => {
    setStudents(students.map(s => (s.id === updated.id ? updated : s)));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent, updateStudent }}>
      {content}
    </StudentContext.Provider>
  );
};
