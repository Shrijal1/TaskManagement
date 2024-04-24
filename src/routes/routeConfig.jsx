import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../container/dashboard";
import TaskForm from "../container/dashboard/form";
import Login from "../container/Login";
import ProtectedRoute from "./protectedRoute";

const RouteConfig = () => {
  const storedToken = JSON.parse(localStorage.getItem("token"));
  console.log(!!storedToken);

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={!!storedToken} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:id" element={<TaskForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
