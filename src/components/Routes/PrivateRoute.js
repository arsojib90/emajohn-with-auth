import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user && user.uid) {
    return children;
  }
  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace />
    </div>
  );
}
