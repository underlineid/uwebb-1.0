import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";

export default function UnAuthRouting() {
  return (
    <Routes>
      <Route path="/register" element={<Auth />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
