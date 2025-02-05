// src/pages/StudentEdit.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";

const StudentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useContext(StudentContext);
  const student = students.find((stu) => stu.id === parseInt(id));

  const [form, setForm] = useState({
    name: student?.name || "",
    email: student?.email || "",
    age: student?.age || "",
    course: student?.course || "",
  });
  const [message, setMessage] = useState("");

  if (!student) return <p>Student not found</p>;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    // Basic validation: required fields and valid email format
    if (!form.name || !form.email || !form.age || !form.course) {
      setMessage("All fields are required.");
      return false;
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setMessage("Invalid email format.");
      return false;
    }
    if (isNaN(form.age)) {
      setMessage("Age must be a number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    updateStudent(id, form);
    setMessage("Student updated successfully.");
    // Optionally redirect back to the detail page after saving
    setTimeout(() => navigate(`/students/${id}`), 1500);
  };

  return (
    <div>
      <h2>Edit Student</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Course:</label>
          <input
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StudentEdit;
