import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";

const StudentDetail = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find((stu) => stu.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
          <div className="flex items-start border-b border-gray-300 pb-4">
            <div className="flex-1">
              <h3 className="text-gray-800 text-xl font-bold">Student Details</h3>
              <p className="text-gray-600 text-sm mt-1">
                Provides a detailed summary of the student.
              </p>
            </div>
            <Link to="/students">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
            </Link>
          </div>

          <div className="my-8">
            <ul className="text-gray-800 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                ID <span className="ml-auto ">{student.id}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Name <span className="ml-auto ">{student.name}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Email <span className="ml-auto ">{student.email}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Age <span className="ml-auto ">{student.age}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Course <span className="ml-auto">{student.course}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm ">
                Enrollment Date <span className="ml-auto">{student.enrollmentDate}</span>
              </li>
            </ul>
          </div>

          <div className="flex max-sm:flex-col items-center gap-4 mt-8">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full tracking-wide bg-transparent hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-lg max-sm:order-1"
            >
              <Link to="/students">Cancel</Link>
              
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              <Link to={`/students/${student.id}/edit`}>Edit</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
