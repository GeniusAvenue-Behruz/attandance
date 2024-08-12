// src/StudentsList.js
import React, { useState, useEffect } from 'react';
import Student from './Student';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');

  useEffect(() => {
    // Load students from local storage or set default
    const loadedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(loadedStudents);
  }, []);

  const updateAttendance = (id, attendance) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, attendance } : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudentName) return; // Prevent adding empty names
    const newStudent = {
      id: new Date().getTime(), // Unique ID based on timestamp
      name: newStudentName,
      attendance: 'Absent' // Default status
    };
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setNewStudentName(''); // Clear the input after adding
  };

  return (
    <div>
      <form onSubmit={handleAddStudent} className="mb-6">
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          className="mr-2 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white shadow hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>
      <div className="space-y-4">
        {students.map(student => (
          <Student key={student.id} student={student} onUpdateAttendance={updateAttendance} />
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
