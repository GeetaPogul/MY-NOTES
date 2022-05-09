import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <div className="m-top"> </div>

      <div className="footer-container">
        <div className="footer-icons">
          <a className="footer-links" href="https://twitter.com/Geeta2005">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="footer-links" href="https://github.com/GeetaPogul">
            <i className="fa fa-github"></i>
          </a>
          <a className="footer-links" href="https://www.linkedin.com/in/geeta-pogul-697127226/">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>

        <div className="content">Developed by Geeta.</div>
      </div>
      <div className="m-top"> </div>
    </>
  );
};

export default Footer;
