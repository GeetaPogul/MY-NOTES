import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";
import Footer from "../../Components/Footer/Footer";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  const { auth } = useAuth();
  return (
    <div>
      <div className="container">
        <div className="text-container">
       
          <p className="heading"> Quick Notes</p>
          <br />
          <span>
            You use Quick notes anytime, anywhere.This is digital noteboook that
            blends notes, and daily planner into one app.
          </span>
          <br />
          <div className="btn-box">
            {auth.status ? (
              <Link to="/notes">
                <br />
                <button className="btns btn-primary"> Take Note</button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <br />
                  <button className="btns btn-primary"> Join Now </button>
                </Link>
              </>
            )}
            {/* <Link to="/notes">
          <button className="btns btn-primary">Take a note</button></Link> */}
          </div>
        </div>

        <div className="img-container">
          <img className="banner-img" src="./home-image.png" alt="img" />
        </div>
      </div> 

     

      <Footer />
      <div className="m"></div>
    </div>
  );
};

export default Home;
