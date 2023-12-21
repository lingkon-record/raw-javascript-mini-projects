import React, { useState } from 'react';
import './App.css';

const studentList = {
  "123456": {
    name: "Sakib",
    fatherName: "David Doe",
    age: 20,
    district: "Dhaka",
    university: "Dhaka University",
    subject: "Computer Science",
    bloodGroup: "A+",
    mobileNo: "0123456789",
    extraInfo: "Achieved top grades in the last semester."
  },
  "789012": {
    name: "Rakib",
    fatherName: "Michael Doe",
    age: 22,
    district: "Chittagong",
    university: "Chittagong University",
    subject: "Business Administration",
    bloodGroup: "B-",
    mobileNo: "9876543210",
    extraInfo: "Active participant in extracurricular activities."
  },
  // Add more students as needed
};

function App() {
  const [uniqueCode, setUniqueCode] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);

  const showStudentInfo = () => {
    if (studentList.hasOwnProperty(uniqueCode)) {
      setStudentInfo(studentList[uniqueCode]);
    } else {
      setStudentInfo(null);
      alert("Student not found. Please check the unique code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Bangladeshi Student Information</h2>

        <div className="mb-4">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter unique code"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
          />
        </div>

        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-md"
          onClick={showStudentInfo}
        >
          Show Information
        </button>

        {studentInfo && (
          <div className="mt-4">
            {Object.keys(studentInfo).map(key => (
              <div key={key} className="mb-2">
                <strong>{key}:</strong> {studentInfo[key]}
              </div>
            ))}
          </div>
        )}

        {!studentInfo && (
          <p className="text-sm text-gray-600 mt-4">
            Start by entering the unique code to view student information.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
