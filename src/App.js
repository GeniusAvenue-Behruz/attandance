// src/App.js
import React from 'react';
import StudentsList from './StudentsList';

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">Student Attendance Tracker</h1>
        <StudentsList />
      </div>
    </div>
  );
}

export default App;
