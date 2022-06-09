import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";
import Footer from "../../Components/Footer/Footer";
// import Sidebar from "../../Components/Sidebar/Sidebar";
// import Notes from "../NotesPage/Notes";

const Home = () => {
  return (
    <div>
     

      <div className="container">
        <div className="text-container">
          <p className="heading"> Quick Notes</p>
          {/* <Sidebar /> */}
          <p className="sub-content">
            You use Quick notes anytime, anywhere.This is digital noteboook that
            blends notes, and daily planner into one app.
            
          </p> 
          <div className="btn-box">
          <Link to="/notes">
          <button className="btns btn-primary">Take a note</button></Link>
          </div>
        </div>

        <div className="img-container">
          <img className="banner-img" src="./home-image.png" alt="img" />
        </div>


       
      </div>

      
<Footer />
    </div>
  );
};

export default Home;
