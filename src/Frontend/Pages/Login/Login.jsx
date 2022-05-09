import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Login = () => {
  return (
    <div>
      <h3>LoginPage</h3>

      <Link to="/signup"> sign up here</Link>
      
    </div>
  );
};

export default Login;
