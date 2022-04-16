import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Logout from "./pages/auth/Logout";
import Dashboard from "./pages/dashboard/Dashboard";
import Navigation from "./pages/navigation/Navigation";
import Subscription from "./pages/subscription/Subscription";

export default function LoggedInRouting() {
  return (
    <Fragment>
      <div className="uwebb-wrapper">
        <Navigation />
        <div className="uwebb-panel">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>THIS IS HOME</h2>
                </div>
              }
            />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/register" element={<Navigate to="/" replace />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}
