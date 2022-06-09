import React,{useState} from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [disableButton, setDisableButton] = useState(true);

  const newPasswordHandler = (event) => {
    const password = event.target.value;
    checkPassword(password, confirmPassword);
    setNewPassword(password);
  };

  const confirmPasswordHandler = (event) => {
    const confirmPassword = event.target.value;
    checkPassword(confirmPassword, newPassword);
    setConfirmPassword(confirmPassword);
  };

  function checkPassword(password1, password2) {
    password1 === password2 && password1 !== "" && password2 !== ""
      ? setDisableButton(false)
      : setDisableButton(true);
  }

  return (
    <>
      <h4></h4>
      <div className="form-container">
        <form className="">
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
              onChange={newPasswordHandler}
              required
              autoComplete="off"
              placeholder=" ********"
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
              onChange={confirmPasswordHandler}
              required
              autoComplete="off"
              placeholder=" ********"
            />
            <br /> <br />
          </div>
          <button className="login-btn-bar" disabled={disableButton}>
            Login
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
