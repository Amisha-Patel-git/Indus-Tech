// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import RegisterForm from "./RegisterForm";


// const Header=()=>{

//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };
  
//     const navigate = useNavigate();
//     return(
//       <>
//       <style>
//         {`
//         .navbar{
//     padding: 10px 20px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//     background-color: #e5e5d1
// }
//  .navbar-brand{
//     font-weight: bold;
//     font-size: 1.5rem;
//     color: #2b2b2b;
//  }

//  .navbar-brand img{
//     height: 40px;
//     cursor: pointer;
//  }

//  .nav-link{
//     color: #2b2b2b;
//     margin: 0 10px;
//     transition: color 0.3s ease;
//     cursor:pointer;
//     padding: 8px 12px; 
//   word-break: break-word;
//  }

// .nav-link:hover{
//     color: #6c63ff;
// }

// .nav-link.btn-primary{
//     background-color: purple;
//     color: white;
//     padding: 10px 20px;
//     border-radius: 5px;
//     text-decoration: none;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     transition: all 0.3s ease;
// }

// .nav-link.btn-primary:hover{
//     background-color: darkviolet;
//     color: white;
//     box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
//     transform: translateY(-2px);
// }

//  @media (max-width: 768px) {
//   .navbar {
//     padding: 5px 15px; /* Adjust padding for small screens */
//   }

//   .nav-link {
//     font-size: 0.9rem; /* Decrease font size for small screens */
//   }

//   .nav-link.btn-primary {
//     padding: 8px 16px; /* Adjust button size */
//   }
// }
//         `}
//       </style>
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <a className="navbar-brand" href="/">
//               <img src="INDUSTECH.png" alt="industech logo" className="logo" />
//             </a>

//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={() => navigate("/aboutus")}
                    
//                     >About Us</a>
//                 </li>

//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     onClick={() => navigate("/products")}
//                   >Products</a>
//                 </li>

//                 <li className="nav-item">
//                   <a className="nav-link" onClick={() => navigate("/contactus")} >Contact Us</a> 
                                                 
//                 </li>
                
//                 <li className="nav-item">
//                   <a className="nav-link btn btn-primary text-white" onClick={() => navigate("/signup")}  >Sign Up</a>                                          
//                 </li>
//                 <li className="nav-item">
//                   {/* <a className="nav-link btn btn-primary text-white" onClick={togglePopup}  >Talk to our Experts</a>
//                   {isPopupOpen && <RegisterForm closeForm={togglePopup} />} */}
//                   <a className="nav-link btn btn-primary text-white" onClick={() => navigate("/talktoexperts")}  >Talk To Experts</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         </>
//     );
// };

// export default Header;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <nav
        style={{
          padding: "10px 20px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#e5e5d1",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#2b2b2b",
              textDecoration: "none",
            }}
          >
            <img
              src="INDUSTECH.png"
              alt="industech logo"
              style={{
                height: "40px",
                cursor: "pointer",
              }}
            />
          </a>

          <div
            id="navbarNav"
            style={{
              display: "flex",
              flexDirection: "row", // Changed this to 'row'
              alignItems: "center", // Keep items aligned in the center
            }}
          >
            <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", margin: 0 }}>
              <li style={{ margin: "0 10px" }}>
                <a
                  onClick={() => navigate("/aboutus")}
                  style={{
                    color: "#2b2b2b",
                    padding: "8px 12px",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  About Us
                </a>
              </li>

              <li style={{ margin: "0 10px" }}>
                <a
                  onClick={() => navigate("/products")}
                  style={{
                    color: "#2b2b2b",
                    padding: "8px 12px",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  Products
                </a>
              </li>

              <li style={{ margin: "0 10px" }}>
                <a
                  onClick={() => navigate("/contactus")}
                  style={{
                    color: "#2b2b2b",
                    padding: "8px 12px",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  Contact Us
                </a>
              </li>

              <li style={{ margin: "0 10px" }}>
                <a
                  onClick={() => navigate("/signup")}
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "darkviolet";
                    e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "purple";
                    e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Sign Up
                </a>
              </li>
              <li style={{ margin: "0 10px" }}>
                <a
                  onClick={() => navigate("/talktoexperts")}
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "darkviolet";
                    e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "purple";
                    e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
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

