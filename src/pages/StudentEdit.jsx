import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students, updateStudent } = useContext(StudentContext);
  const student = students.find((stu) => stu.id === parseInt(id));
  const notify = () => toast.success("Student updated successfully.", {transition: Bounce});

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
    notify()
    // setMessage("Student updated successfully.");

    // Optionally redirect back to the detail page after saving
    setTimeout(() => navigate(`/students/${id}`), 1500);
  };

  return (
    <div className="bg-gray-50">
      <h2 className="text-center py-4 text-lg text-blue-700">Edit Student</h2>
        <ToastContainer draggablePercent={50} limit={2}/>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center max-w-lg mx-auto space-y-6 p-4 mt-6 rounded-3xl bg-white shadow">
          <div>
            <label className="mb-2 text-base block">Name:</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-base block">Email:</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-base block">Age:</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              required
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 text-base block">Course:</label>
            <input
              name="course"
              value={form.course}
              onChange={handleChange}
              required
              className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer px-5 py-2.5 rounded-lg border outline-none text-sm bg-blue-700 hover:bg-transparent text-white hover:text-blue-700 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentEdit;
