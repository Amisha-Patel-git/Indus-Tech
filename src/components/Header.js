import React from "react";
import { useNavigate } from "react-router-dom";



const Header=()=>{
    const navigate = useNavigate();
    return(
      <>
      <style>
        {`
        .navbar{
    /* background-color: transparent !important;
    box-shadow: none; */
    /* background-color: white; */
    padding: 15px 30px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #e5e5d1
}

/* .navbar .navbar-brand{
    font-weight: bold;
    font-size: 24px;
    color: #333;
} */
 .navbar-brand{
    font-weight: bold;
    font-size: 1.5rem;
    color: #2b2b2b;
 }

 .navbar-brand img{
    height: 50px;
    cursor: pointer;
 }

/* .navbar .nav-link{
    color: #333;
    font-size: 18px;
} */
 .nav-link{
    color: #2b2b2b;
    margin: 0 10px;
    transition: color 0.3s ease;
    cursor:pointer;
 }

/* .navbar .nav-link:hover{
    color: #007bff;
} */
.nav-link:hover{
    color: #6c63ff;
}

.nav-link.btn-primary{
    background-color: purple;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.nav-link.btn-primary:hover{
    background-color: darkviolet;
    color: white;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}

/* .navbar .dropdown-menu{
    background-color: #fff;
    border: 1px solid #ddd;
} */
.dropdown-menu{
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

.dropdown-item{
    padding: 10px 20px;
    transition: background 0.3s ease;
}

/* .navbar .dropdown-item:hover{
    background-color: #f8f9fa;
} */
.dropdown-item:hover{
    background: #f3f3f3;
}
        `}
      </style>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="INDUSTECH.png" alt="industech logo" className="logo" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/aboutus")}
                    
                    >About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={() => navigate("/contactus")} >Contact Us</a> 
                                                 
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/products")}
                  >Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary text-white" onClick={() => navigate("/signup")}  >Sign Up</a>
                                                                    
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    );
};

export default Header;

