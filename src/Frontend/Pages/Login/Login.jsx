import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
import {loginHandler} from "../../services/AuthServices/loginService"

import { useAuth } from "../../contexts/AuthContext";
const Login = () => {

 

  return (
    <div>
      <h2></h2> <br/>
      <h1></h1>

      <form className="form-container">
        <div form-container>
        <div className="user-input"> 
        <label htmlFor="email">
          Email Address <span>*</span><br/>
          </label>
          <input
           id="email"
           type="email"
           required
           autoComplete="off"
           placeholder="johndoe@gmail.com"
           />
      <br/>
        </div>
        <div className="user-input">
          
        <label htmlFor="user-password">
          Password <span>*</span> <br/>
          </label>
          <input 
          id="user-password"
          type="password"
          required
          autocomplete="off"
          placeholder="********"
          />
          
          </div>
         <br/>

        <button className=" login-btn-bar"> Login</button> <br/> <br/>
        <hr/>
        <div className="bottom-bar">
        <Link className="create-acc-link" to="/signup"> Create New Account <i className="fa fa-chevron-circle-right"></i></Link>
        </div>
        </div>

      </form>

      
      
    </div>
  );
};

export default Login;
