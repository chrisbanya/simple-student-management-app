import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const dummyUser = { email: "admin@example.com", password: "password123" };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Checking localStorage for existing auth state on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password) => {
    if (email === dummyUser.email && password === dummyUser.password) {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
