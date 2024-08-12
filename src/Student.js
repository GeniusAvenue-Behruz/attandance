// src/Student.js
import React from 'react';

const Student = ({ student, onUpdateAttendance }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 transition-all hover:shadow-xl">
      <span className="text-lg font-medium text-gray-800">{student.name}</span>
      <select
        value={student.attendance}
        onChange={(e) => onUpdateAttendance(student.id, e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 shadow-sm bg-white hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Delayed">Delayed</option>
      </select>
    </div>
  );
};

export default Student;
