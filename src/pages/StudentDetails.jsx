// src/pages/StudentDetail.jsx
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";

const StudentDetail = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find((stu) => stu.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h2>Student Detail</h2>
      <p>
        <strong>ID:</strong> {student.id}
      </p>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
      <p>
        <strong>Course:</strong> {student.course}
      </p>
      <p>
        <strong>Enrollment Date:</strong> {student.enrollmentDate}
      </p>
      <Link to={`/students/${student.id}/edit`}>Edit</Link>
    </div>
  );
};

export default StudentDetail;
