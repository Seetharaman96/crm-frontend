import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? (
    <div>
      <h3>this is protected route</h3>
      {children}
    </div>
  ) : (
    <Navigate replace to="/admin/login" />
  );
}
