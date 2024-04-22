import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../container/dashboard";
import TaskForm from "../container/dashboard/form";

const RouteConfig = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        {/* <Route
              path='/admin'
              element={<ProtectedRoute isAuthenticated={true} />}
            > */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<TaskForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
