import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";
import { MdOutlineVisibility } from "react-icons/md";

const StudentList = () => {
  const { students, searchTerm } = useContext(StudentContext);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <h2 className="font-[sans-serif] mt-4 mb-4 pl-4">Student List</h2>
      <article className="font-[sans-serif] overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 whitespace-nowrap">
            <tr>
              <th className="p-4 text-left text-sm font-medium text-white">
                ID
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Name
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Email
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Age
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Course
              </th>
              <th className="p-4 text-left text-sm font-medium text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="even:bg-blue-50">
                <td className="p-4 text-sm text-black">{student.id}</td>
                <td className="p-4 text-sm text-black">{student.name}</td>
                <td className="p-4 text-sm text-black">{student.email}</td>
                <td className="p-4 text-sm text-black">{student.age}</td>
                <td className="p-4 text-sm text-black">{student.course}</td>
                <td className="p-4 text-sm text-black">
                  <Link to={`/students/${student.id}`}>
                    <MdOutlineVisibility />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default StudentList;
