import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { StudentProvider } from "./contexts/StudentContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import StudentList from "./pages/StudentList";
import StudentDetail from "./pages/StudentDetails";
import StudentEdit from "./pages/StudentEdit";

const App = () => {
  return (
    <AuthProvider>
      <StudentProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/students" element={<StudentList />} />
              <Route path="/students/:id" element={<StudentDetail />} />
              <Route path="/students/:id/edit" element={<StudentEdit />} />
            </Route>
            {/* Redirect */}
            <Route path="*" element={<Login />} />
          </Routes>
        </Router>
      </StudentProvider>
    </AuthProvider>
  );
};

export default App;
