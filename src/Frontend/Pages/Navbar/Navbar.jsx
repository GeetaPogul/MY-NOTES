import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";

import LabelsPage from "../LabelsPage/Labels";
import ArchivePage from "../ArchivePage/ArchivePage";
import TrashPage from "../TrashPage/TrashPage";
import SignUp from "../SignUp/SignUp";
import "../Navbar/navbar.css";
import NotesPage from "../NotesPage/Notes";

import Mockman from "mockman-js";

import { useAuth } from "../../contexts/AuthContext";
import { ProtectedRoute } from "../../ProtectedRoute/ProtectedRoute";
const Navbar = () => {
  const { auth } = useAuth();
  const toggleHandler = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <div>
      <nav className="navigation-bar">
        <Link className="links logo-text" to="/">
          <i
            className="fa fa-lightbulb-o"
            style={{ fontSize: "36px", color: "#f0ece3" }}
          ></i>
          Quick Notes
        </Link>
        <span>
          <button className="btn toggle-btn" onClick={toggleHandler}>
            <i className="fa fa-moon-o"></i>
          </button>
          <Link className="links login-text" to="/login">
            Login
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
