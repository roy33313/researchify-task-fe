import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.page";
import Login from "../pages/Login.page";
import TaskCalendar from "../pages/TaskCalendar.page";
import ProtectedRoute from "../hoc/ProtectedRoute.hoc";
import { useAuth } from "../providers/AuthProvider.provider";

function AppRoutes() {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={token ? <Navigate to="/" replace /> : <Login />}
      />
      <Route element={<ProtectedRoute isAuthenticated={!!token} />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<TaskCalendar />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
