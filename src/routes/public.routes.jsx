import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export default function PublicRoute({ children }) {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/" replace /> : children;
}