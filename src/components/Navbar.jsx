import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { StudentContext } from "../contexts/StudentContext";
import { FiSearch } from "react-icons/fi";


const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(StudentContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <div className="order-1 w-1/2 md:w-auto">
          <span className="text-xl font-bold text-blue-600">
            {user ? <Link to="/students">SMS</Link> : <p>SMS</p>}
          </span>
        </div>
        {user && (
          <div className="order-2 w-1/2 text-right md:w-auto md:order-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Logout
             
            </button>
          </div>
        )}
        {user && (
          <div className="order-3 w-full mt-3 md:order-2 md:w-1/2 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 border-blue-700"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
