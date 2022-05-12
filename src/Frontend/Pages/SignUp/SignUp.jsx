import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

import {signupHandler} from "../../services/exportService"
import { useAuth } from "../../contexts/AuthContext";


const SignUp = () => {
  // const [newPassword, setNewPassword] = useState("");

  // const [confirmPassword, setConfirmPassword] = useState("");

  // const [disableButton, setDisableButton] = useState(true);

  // const newPasswordHandler = (event) => {
  //   const password = event.target.value;
  //   checkPassword(password, confirmPassword);
  //   setNewPassword(password);
  // };

  // const confirmPasswordHandler = (event) => {
  //   const confirmPassword = event.target.value;
  //   checkPassword(confirmPassword, newPassword);
  //   setConfirmPassword(confirmPassword);
  // };

  // function checkPassword(password1, password2) {
  //   password1 === password2 && password1 !== "" && password2 !== ""
  //     ? setDisableButton(false)
  //     : setDisableButton(true);
  // }


  const navigate = useNavigate();
  const {setAuth} = useAuth();
  const [userSignup, setUserSignup] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  const handleSignup = async (userSignup) => {
    const data = await signupHandler(userSignup);

    setAuth((auth) => ({
      ...auth,
      user : data.createdUser.firstName,
      status: true,
      authToken: data.encodedToken,

    }));

    localStorage.setItem("user", data.createdUser.firstName);
    localStorage.setItem("authToken", data.encodedToken);
    navigate("/notes");
  }

  return (
    <>
      <h4></h4>
      <div className="form-container">
        <form className="" onSubmit={(event) =>{  event.preventDefault();
        handleSignup(userSignup);

        }
        }>
          <div className="user-input">
            <label htmlFor="user-name">
              First Name <span>*</span>
            </label>
            <br />
            <input
              type="text"
              id="user-name"
              required
              autoComplete="off"
              placeholder=" John"
              onChange={(event) => 
              setUserSignup((user) => ({
                ...user,firstName: event.target.value
              }))}
            />
          </div>
          <div className="user-input">
            <label htmlFor="user-lastName">
              Last Name<span>*</span>
            </label>
            <br />
            <input
              type="text"
              id="user-lastName"
              required
              autoComplete="off"
              placeholder=" Doe"
              onChange={(event) => 
                setUserSignup((user) => ({
                  ...user,lastName: event.target.value
                }))}
            />
          </div>
          <div className="user-input">
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <br />
            <input
              type="email"
              id="email"
              required
              autoComplete="off"
              placeholder=" johndoe@gmail.com"
              onChange={(event) => 
                setUserSignup((user) => ({
                  ...user,email: event.target.value
                }))}
            />
          </div>
          <div className="user-input">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              id="password"
              // onChange={newPasswordHandler}
              required
              autoComplete="off"
              placeholder=" ********"
              onChange={(event) => 
                setUserSignup((user) => ({
                  ...user,password: event.target.value
                }))}
            />
            <br />
          </div>
          <div className="user-input">
            <label htmlFor="confirmpassword">
              Confirm Password <span>*</span>
            </label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              // onChange={confirmPasswordHandler}
              required
              autoComplete="off"
              placeholder=" ********"
              onChange={(event) => 
                setUserSignup((user) => ({
                  ...user,confirmpassword: event.target.value
                }))}
            />
            <br /> <br />
          </div>
          <button className="login-btn-bar" type="submit">
            Create New Account
          </button>
          <br />
          <br />
          <hr />
          <div className="bottom-bar">
            <Link className="create-acc-link" to="/login">
              Already have Account <i class="fa fa-chevron-circle-right"></i>
            </Link>
          </div>
        </form>
      </div>

      
    </>
  );
};

export default SignUp;
