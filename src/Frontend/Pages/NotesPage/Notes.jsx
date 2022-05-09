import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "../NotesPage/notes.css"
function Notes() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
        <Sidebar />
        </div>
        <div className="sidebar-content">
        <h3>Notes Page</h3>
        </div>
      </div>
    </>
  );
}

export default Notes;
