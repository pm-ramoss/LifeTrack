import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
