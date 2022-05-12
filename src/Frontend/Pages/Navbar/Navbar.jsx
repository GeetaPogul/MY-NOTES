import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";

import LabelsPage from "../LabelsPage/Labels";
import ArchivePage from "../ArchivePage/ArchivePage";
import TrashPage from "../TrashPage/TrashPage";
import SignUp from "../SignUp/SignUp";

import "../Navbar/navbar.css";
import NotesPage from "../NotesPage/Notes";
import { useAuth } from "../../contexts/AuthContext";
const Navbar = () => {

  const {auth} = useAuth();
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/labels" element={<LabelsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </div>
  );
};

export default Navbar;
