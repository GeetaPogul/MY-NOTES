import React from "react";
import { NavLink } from "react-router-dom";

import "../Sidebar/sidebar.css";

function Sidebar() {

  const setActiveColor = ({isActive}) =>({
    backgroundColor : isActive ? "#64456d" : "",
    color : isActive ? "#e8e3d6" :"#64456d"
  })
  return (
    <>
      <div className="side-bar-container">
        <aside className="side-bar">
          <NavLink style={setActiveColor} className="side-links" to="/notes">
            Notes
          </NavLink>
          <NavLink style={setActiveColor} className="side-links" to="/labels">
            Label
          </NavLink>
          <NavLink style={setActiveColor} className="side-links" to="/archive">
            Archive
          </NavLink>
          <NavLink style={setActiveColor} className="side-links" to="/trash">
            Trash
          </NavLink>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
