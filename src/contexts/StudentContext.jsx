/* eslint-disable react-refresh/only-export-components */
// src/contexts/StudentContext.jsx
import React, { createContext, useState } from "react";

// Dummy initial data
const initialStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 20,
    course: "Computer Science",
    enrollmentDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 22,
    course: "Mathematics",
    enrollmentDate: "2022-09-01",
  },
  {
    id: 3,
    name: "kyle trump",
    email: "ktrump@example.com",
    age: 53,
    course: "psychology",
    enrollmentDate: "2025-01-20",
  },
  {
    id: 4,
    name: "melania quicksand",
    email: "melania@example.com",
    age: 35,
    course: "civic",
    enrollmentDate: "2025-09-01",
  },
  {
    id: 5,
    name: "kamala kamara",
    email: "kk@example.com",
    age: 29,
    course: "law",
    enrollmentDate: "2022-09-01",
  },
  {
    id: 6,
    name: "tra rags",
    email: "raggs@example.com",
    age: 22,
    course: "theatre arts",
    enrollmentDate: "2012-03-09",
  },
  // Add more student records as needed
];

export const StudentContext = createContext();

// eslint-disable-next-line react/prop-types
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);
   const [searchTerm, setSearchTerm] = useState("");

  const updateStudent = (id, updatedData) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === parseInt(id) ? { ...student, ...updatedData } : student
      )
    );
  };

  return (
    <StudentContext.Provider value={{ students, updateStudent, searchTerm, setSearchTerm }}>
      {children}
    </StudentContext.Provider>
  );
};
