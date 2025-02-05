import  { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { StudentContext } from "../contexts/StudentContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(StudentContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex border-b py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[65px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 max-w-screen-xl mx-auto w-full">
        <div className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <div>{user ? <Link to="/students">SMS</Link> : <p>SMS</p>}</div>
        </div>
        {user && (
          <div className="flex gap-4 ml-auto">
            <div className="flex max-w-xs w-full bg-gray-100 px-4 py-2 rounded outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all">
              <input
                type="text"
                placeholder="Search by name or course"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm bg-transparent rounded outline-none pr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-400"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
            <button onClick={handleLogout}>LogOut</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
