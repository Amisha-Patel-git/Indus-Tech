import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ isDarkMode, toggleTheme }) => {



  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
        .switch{
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
    margin-left: 10px;
}
.switch input{
    display: none;
}
.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
}
.slider::before{
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}
input:checked+.slider{
    background-color: #2196f3;
}
input:checked+.slider:before{
    transform: translateX(14px);
}
        `}
      </style>
      <section className="footer-section">
        {/* <div className="footer-divider"></div> */}
        <div className="footer-container">
          <div className="footer-left">
            <p>©Info-Tech. All Rights Reserved.</p>
          </div>

          <div className="footer-middle">
            <p className="clickable" onClick={() => navigate("/privacypolicy")}>Privacy Policy</p>
            <p className="clickable" onClick={() => navigate("/termsconditions")}>Terms & Conditions</p>
          </div>

          <div className="footer-right">
            <p>Current Mode:{isDarkMode ? 'Dark' : 'Light'}</p>
            <label className="switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider round"></span>
            </label>
            <a href="https://x.com/Industech_RMC" target="_blank" rel="noopener noreferrer">
              <i className="social-icon x-icon">X</i>
            </a>
            <a href="https://www.linkedin.com/company/105716136/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <i className="social-icon linked-icon">LinkedIn</i>
            </a>
            <a href="https://www.youtube.com/@Indus-techRMC" target="_blank" rel="noopener noreferrer">
              <i className="social-icon youtube-icon">Youtube</i>
            </a>
            <a href="https://www.instagram.com/indus_tech_rmc/profilecard/?igsh=MWdjYTdybDB3dTI4aw%3D%3D" target="_blank" rel="noopener noreferrer">
              <i className="social-icon instagram-icon">Instagram</i>
            </a>
          </div>
        </div>

        {/* <div id="popup" className="popup hidden">
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <h3 id="popup-title"></h3>
            <p id="popup-body"></p>
          </div> */}
      </section>
    </>
  )
};

export default Footer;