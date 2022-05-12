import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../contexts/NoteContext";
import { useAuth } from "../../contexts/AuthContext";


const ArchivePage = () => {
  return (
    <>
     <div className="wrapper">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="sidebar-content">
        <h3>Archive Page</h3>
        </div>
      </div>
    </>
  );
};

export default ArchivePage;
