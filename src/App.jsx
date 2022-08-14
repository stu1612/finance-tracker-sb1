import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import useAuthContext from "./hooks/useAuthContext";
// files
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import "./styles/main.scss";

export default function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
