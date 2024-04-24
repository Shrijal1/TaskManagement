import { Navigate, Outlet, Route } from "react-router";
import Login from "../container/Login";

const ProtectedRoute = ({ isAuthenticated }) => {
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;

