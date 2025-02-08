import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { VscMail } from "react-icons/vsc";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      navigate("/students");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <section>
      <div className="bg-gray-50 font-[sans-serif]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">
                Sign in
              </h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Email"
                    />
                    <VscMail className="w-4 h-4 absolute right-4 opacity-50" />
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter password"
                    />
                    {showPassword ? (
                      <MdOutlineVisibility
                        className="w-4 h-4 absolute right-4 cursor-pointer opacity-50"
                        onClick={handleTogglePassword}
                      />
                    ) : (
                      <MdOutlineVisibilityOff
                        className="w-4 h-4 absolute right-4 cursor-pointer opacity-50"
                        onClick={handleTogglePassword}
                      />
                    )}
                  </div>
                </div>

                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
