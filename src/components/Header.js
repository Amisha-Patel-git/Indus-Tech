import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          .navbar {
            background-color: #e5e5d1;
            padding: 15px 30px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .navbar-brand {
            font-weight: bold;
            font-size: 1.5rem;
            color: #2b2b2b;
          }

          .navbar-brand img {
            height: 50px;
            cursor: pointer;
          }

          .nav-link {
            color: #2b2b2b;
            margin: 0 10px;
            transition: color 0.3s ease;
            cursor: pointer;
          }

          .nav-link:hover {
            color: #6c63ff;
          }

          .nav-link.btn-primary {
            background-color: purple;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .nav-link.btn-primary:hover {
            background-color: darkviolet;
            color: white;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
          }

          .navbar .dropdown-menu {
            display: none;
            position: absolute;
            background: white;
            border: 1px solid #ccc;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            margin-top: 10px;
            z-index: 1000;
            padding: 10px 0;
          }

          .dropdown-item {
            padding: 10px 20px;
            transition: background 0.3s ease;
          }

          .dropdown-item:hover {
            background: #f3f3f3;
          }

          @media (max-width: 991px) {
            .navbar {
              padding: 10px 15px;
            }
            .navbar-toggler {
              border-color: #6c63ff;
            }
          }

          @media (max-width: 576px) {
            .navbar-brand {
              font-size: 1.2rem;
            }

            .navbar-nav {
              margin-top: 10px;
              text-align: center;
            }

            .nav-link {
              font-size: 1.1rem;
              margin: 5px 0;
            }

            .nav-link.btn-primary {
              width: 100%;
              margin-top: 10px;
            }

            /* Make navbar items stack */
            .navbar-collapse {
              text-align: center;
            }

            .navbar-nav {
              width: 100%;
            }

            .nav-item {
              width: 100%;
              padding: 5px 0;
            }

            .nav-link {
              width: 100%;
              display: block;
            }
          }

          /* Ensure navbar and brand logo stay in view */
          .navbar-toggler-icon {
            background-color: #6c63ff;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="INDUSTECH.png" alt="industech logo" className="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/aboutus")}>
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/products")}>
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/contactus")}>
                  Contact Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" onClick={() => navigate("/signup")}>
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" onClick={() => navigate("/talktoexperts")}>
                  Talk To Experts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
