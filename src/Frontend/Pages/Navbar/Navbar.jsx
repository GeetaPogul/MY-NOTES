import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
// import { Button } from "@mui/icons-material";
import LabelsPage from "../LabelsPage/Labels";
import ArchivePage from "../ArchivePage/ArchivePage";
import TrashPage from "../TrashPage/TrashPage";
import SignUp from "../SignUp/SignUp";
import "../Navbar/navbar.css";
import NotesPage from "../NotesPage/Notes";

import Mockman from "mockman-js";

import { useAuth } from "../../contexts/AuthContext";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
// import { BatteryFullTwoTone } from "@mui/icons-material";
const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setAuth((auth) => ({
      ...auth,
      user: "",
      status: false,
      authToken: null,
    }));
  };

  const toggleHandler = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <div>
      <nav className="navigation-bar">
        <Link className="links logo-text" to="/">
          <i className="material-icons " style={{ fontSize: "34px" }}>
            {" "}
            edit
          </i>
          Quick Notes
        </Link>

        <span className="right-side-navbar">
          <span className="toggle-btn ion"> Hi, {auth.user} </span>
          <Link to="/" className="links toggle-btn ion" onClick={logoutHandler}>
            <i className="material-icons logout-btn"> logout </i>
          </Link>

          <button className="btn toggle-btn ion" onClick={toggleHandler}>
            <i className="material-icons logout-btn"> dark_mode</i>
          </button>

          <Link className="links login-text ion" to="/login">
            <span className="material-icons logout-btn" title="login">
              person
            </span>
          </Link>
        </span>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        {!auth.status && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <NotesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/labels"
          element={
            <ProtectedRoute>
              <LabelsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/archive"
          element={
            <ProtectedRoute>
              <ArchivePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trash"
          element={
            <ProtectedRoute>
              <TrashPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default Navbar;
