import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
import { loginHandler } from "../../services/AuthServices/loginService";

import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [userLogged, setUserLogged] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (userLogged) => {
    const data = await loginHandler(userLogged);

    setAuth((auth) => ({
      ...auth,
      user: data.foundUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));

    localStorage.setItem("user", data.foundUser.firstName);
    localStorage.setItem("authToken", data.encodedToken);


    navigate("/notes");
  };

  return (
    <div>
      <h2></h2> <br />
      <h1></h1>
      <form
        className="form-container"
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin(userLogged);
        }}
      >
        <div form-container>
          <div className="user-input">
            <label htmlFor="email">
              Email Address <span>*</span>
              <br />
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="off"
              placeholder="johndoe@gmail.com"
              onChange={(event) => {
                setUserLogged({ ...userLogged, email: event.target.value });
              }}
            />
            <br />
          </div>
          <div className="user-input">
            <label htmlFor="user-password">
              Password <span>*</span> <br />
            </label>
            <input
              id="user-password"
              type="password"
              required
              autocomplete="off"
              placeholder="********"
              onChange={(event) => {
                setUserLogged({
                  ...userLogged,
                  password: event.target.value,
                });
              }}
            />
          </div>
          <br />
          <button className=" login-btn-bar" type="submit">
            {" "}
            Login
          </button>{" "}
          <br />
          <button
            className=" login-btn-bar"
            onClick={(event) => {
              event.preventDefault();
              handleLogin({
                email: "adarshbalika@gmail.com",
                password: "adarshbalika123",
              });
            }}
          >
            {" "}
            Login As Guest
          </button>{" "}
          <br />
          <br />
          <hr />
          <div className="bottom-bar">
            <Link className="create-acc-link" to="/signup">
              {" "}
              Create New Account <i className="fa fa-chevron-circle-right"></i>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
