import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Player } from '@lottiefiles/react-lottie-player';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import SignUp from "./pages/SignUp";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const [popupContent, setPopupContent] = useState({ title: "", body: "" });
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = (contentType) => {
    if (contentType === "Privacy Policy") {
      setPopupContent({
        title: "Privacy Policy",
        body: "Here you can include the content."
      });
    } else if (contentType === "Terms & Conditions") {
      setPopupContent({
        title: "Terms & Conditions",
        body: "Here you can include the content."
      });
    }
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  const [aboutUsVisible, setAboutUsVisible] = useState(false);
  const openAboutUs = () => {
    setAboutUsVisible(true);
  };
  const closeAboutUs = () => {
    setAboutUsVisible(false);
  };

  const [showContactPopup, setShowContactPopup] = useState(false);
  const checkOfficeStatus = () => {
    const currentDay = new Date().getDay();
    const currentTime = new Date().getHours();
    if (currentDay >= 1 && currentDay <= 5) {
      if (currentTime >= 9 && currentTime < 17) {
        return "Open (9AM to 5 PM)";
      } else {
        return "Closed (Outside working hours)";
      }
    } else {
      return "Closed (Weekend)";
    }
  };

  const [showProducts, setShowProducts] = useState(false);
  const products = [
    {
      title: "Collection Solutions",
      content: "Empower yout business with seamlesscollection solutions tailored to suit your needs.",
      imgSrc: "CollectionSolutions.jpeg",
    },
    {
      title: "Payout Solutions",
      content: "Simlify payments and enhance efficiency with our reliable payout solutions.",
      imgSrc: "PayoutSolutions.jpeg",
    },
    {
      title: "Escrow with Banks",
      content: "Experience secure transactionswith our escrow services in partnership with banks.",
      imgSrc: "escrow.jpg",
    },
    {
      title: "Structured Solutions",
      content: "Unlock growth with customized and structured financial solutions for your business",
      imgSrc: "StructuredSolutions.jpeg",
    },
    {
      title: "Connected Banking",
      content: "Integrate banking solutions seamlessly with our advanced connected banking tools.",
      imgSrc: "ConnectedBanking.jpeg"
    }
  ]

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleSignUpSubmit = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };
  const handleLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };
  const closeAuthPopup = () => {
    setShowSignUp(false);
    setShowLogin(false);
  }

  const [passwordError, setPasswordError] = useState("");
  const handleSignUpValidation = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    } else {
      console.error("Event object is not passed properly.");
      return;
    }
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, includean uppercase letter, a number, and a special character."
      );
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not mstch.");
      return;
    }
    setPasswordError("");
    alert("Sign Up successful!");
    closeAuthPopup();
  };

  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const openPrivacyPopup = () => {
    setShowPrivacyPolicy(true);
  };
  const closePrivacyPopup = () => {
    setShowPrivacyPolicy(false);
  };

  const [showTerms, setShowTerms] = useState(false);
  const openTermsPopup = () => {
    setShowTerms(true);
  };
  const closeTermsPopup = () => {
    setShowTerms(false);
  };

  return (
    <Router>
      <div className="App">
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
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#about-us"
                    onClick={(e) => {
                      e.preventDefault();
                      openAboutUs();
                    }}>About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => setShowContactPopup(true)}>Contact Us</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowProducts(true);
                    }}
                  // href="#" id="productsDropdown"
                  // role="button"
                  // data-bs-toggle="dropdown" 
                  // aria-expanded="false" 
                  // onMouseEnter={(e) => {
                  //   const dropdown = e.target.nextElementSibling;
                  //   dropdown.style.display = "block";
                  // }}
                  // onMouseLeave={(e) => {
                  //   const dropdown = e.target.nextElementSibling;
                  //   dropdown.style.display = "none";
                  // }}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setShowOverlay(true);
                  // }}
                  >Products</a>
                  <ul className="dropdown-menu" aria-labelledby="productsDropdown"
                    onMouseEnter={(e) => {
                      e.target.style.display = "block";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.display = "none";
                    }}>
                    <li><a className="dropdown-item" href="#">Collection Solution</a></li>
                    <li><a className="dropdown-item" href="#">Payout Solution</a></li>
                    <li><a className="dropdown-item" href="#">Escrow with banks</a></li>
                    <li><a className="dropdown-item" href="#">Connected Banking</a></li>
                    <li><a className="dropdown-item" href="#">Structured Solutions</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary text-white" onClick={handleSignUpSubmit} >Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {showContactPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <button className="close-button" onClick={() => setShowContactPopup(false)}>&times;</button>
              <div className="popup-content">
                <div className="contact-info">
                  <h2>Contact Us</h2>
                  <p><strong>Registered Address:</strong>H-61, Office number- 15, 2nd floor, sector-63,Noida, India, 201301</p>
                  <p><strong>Corporate Address:</strong>AG- 08 Tower A, Pioneer Urban Square, Sector 62, Gurgaon , 122102</p>
                  <p><strong>Email:</strong><a href="mailto:info@indus-tech.co.in">info@indus-tech.co.in</a></p>
                  <p><strong>Phone:</strong><a href="tel:+91 9289479436">+91 9289479436</a></p>
                  <p><strong>Hours:</strong>{checkOfficeStatus()}</p>
                </div>
                <div className="map-container">
                  <iframe
                    title="Corporate Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.162283701226!2d77.08539357536219!3d28.41435969395493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2211b5109b8d%3A0xc815f82f1e46ea!2sTower%20A%2C%20Pioneer%20Urban%20Square%2C%20Sector%2062%2C%20Gurugram%2C%20Ghata%2C%20Haryana%20122102!5e0!3m2!1sen!2sin!4v1733112834102!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {aboutUsVisible && (
          <div className="about-us-popup">
            <div className="about-us-content">
              <button className="close-btn" onClick={closeAboutUs}>&times;</button>
              <h2 className="popup-heading">Know Us More</h2>
              <section className="about-section">
                <h3>Our Mission</h3>
                <div className="content">
                  <img
                    src="36925.jpg"
                    alt="Our Mission"
                    className="about-image"
                  />
                  <p>
                    At Indus-tech RMC Private Limited, we are dedicated to revolutionizing payment gateway solutions for a wide range of businesses. Our expertise With a commitment to innovation and excellence, we strive to empower businesses with reliable payment solutions that enhance their operational efficiency and customer satisfaction. Partner with us to experience cutting-edge technology and unparalleled service in the financial services sector.
                    Overcome Payment Challenges and Propel Your Business Forward with Our Secure and Streamlined Payment Gateway.
                  </p>
                </div>
              </section>
              <section className="about-section">
                <h3>Our Vision</h3>
                <div className="content">
                  <img src="./vision.png"
                    alt="Our Vision"
                    className="about-image"
                  />
                  <p>
                    Indus-Tech envisions a future where technology seamlessly integrates into everyday life. We aim to lead the digital transformation journey for enterprises in India
                  </p>
                </div>
              </section>
              <section className="about-section">
                <h3>Our Team</h3>
                <div className="content">
                  <img src="./teamimg.png"
                    alt="Our Team"
                    className="about-image"
                  />
                  <p>
                    The strength of Indus Tech lies in our dedicated team of professionals. With expertise in various domains, we are committed to delivering excellence and fostering a culture of continuous improvement.
                  </p>
                </div>
              </section>
              <section className="rmc-section">
                <h2 className="stand-for">WE STAND FOR</h2>
                <div className="rmc-container">
                  <div className="rmc-box">
                    <h3>R</h3>
                    <p>Reliable</p>
                  </div>
                  <div className="rmc-box">
                    <h3>M</h3>
                    <p>Merchant</p>
                  </div>
                  <div className="rmc-box">
                    <h3>C</h3>
                    <p>Connect</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}


        {showOverlay && (
          <div className="overlay" onClick={() => setShowOverlay(false)}>
            <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
              <h2>Products</h2>

              <button
                className="btn btn-primary mt-3"
                onClick={() => setShowOverlay(false)}
              >Close</button>
            </div>
          </div>
        )}

        {showProducts && (
          <div className="products-popup">
            <div className="products-popup-content">
              <button
                className="close-popup-button"
                onClick={() => setShowProducts(false)}
              >&times;</button>
              <h1 className="products-heading">Our Products</h1>
              <div className="products-container">
                {products.map((product, index) => (
                  <div
                    className="product-card"
                    key={index}
                  // data-aos="fade-up"
                  // data-aos-delay={`$(index*100)`}
                  >
                    <img src={product.imgSrc}
                      alt={product.title}
                      className="product-image"
                    />
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-content">{product.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showSignUp && (
          <div className="signup-popup" onClick={closeAuthPopup}>
            <div className="signup-popup-content" onClick={(e) => e.stopPropagation()}>
              <div className="popup-left">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Background" />
              </div>
              <div className="popup-right">
                <h2>Register with Us</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                    handleSignUpValidation();
                    // handelQuerySubmit();
                  }}>
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone" required />
                  <input type="password" id="password" placeholder="Password" required />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required />
                  {passwordError && <p className="error">{passwordError}</p>}
                  <button type="submit" className="btn-submit">Sign Up</button>
                  {/* <input type="text" placeholder="Name" required />
                  <input type="tel" placeholder="Phone" required />
                  <input
                    type="email"
                    placeholder="Your Email"
                    id="queryEmail"
                    required
                  />
                  <textarea
                    placeholder="What Solution are you looking for?"
                    id="queryMessage"
                    rows="5"
                    required
                  ></textarea>
                  <button type="submit" className="btn-submit">Submit</button> */}
                </form>
              </div>
            </div>
          </div>
        )}

        {showLogin && (
          <div className="signup-popup" onClick={closeAuthPopup}>
            <div className="signup-popup-content" onClick={(e) => e.stopPropagation()}>
              <div className="popup-left">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Background" />
              </div>
              <div className="popup-right">
                <h2>Welcome Back</h2>
                <form>
                  <input type="email" placeholder="Email" required />
                  <input type="password" placeholder="Password" required />
                  <button type="submit" className="btn-submit">Log In</button>
                </form>
                <p>
                  Don't have an account?{''}
                  <span className="link" btn btn-primary onClick={handleSignUpSubmit}>Sign Up</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* <hr className="navbar-underline" /> */}

        {/* Vision Section */}
        <section className="vision-section py-5">
          <div className="container d-flex align-items-center">
            <div className="vision-text w-50">
              <h2 className="vision-title">Transforming Technology for <span className="highlighted-text">Your Business</span></h2>
              <p className="vision-subtitle">
                Fueling Business Expansion with our Cutting-Edge Payment Solutions
              </p>
              <button className="btn get-started-btn">Get Started Today</button>
            </div>

            <div className="lottie-animation w-50">
              <Player
                autoplay
                loop
                src={"https://lottie.host/8dd7a97a-bae7-4290-a210-b2093d86a92c/Agchp1uLtK.json"}
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </div>
        </section>

        {/* What we offer section */}
        <section className="what-we-offer-section py-5">
          <div className="container">
            <h2 className="what-we-offer-title text-center">What WE Offer !</h2>
            <div className="row">
              <div className="col-md-2 offset-md-1 offer-box">
                <Player autoplay loop src={"https://lottie.host/9bc375d7-068e-4e39-833f-45ee77d0ffe3/EPHxlE3lO8.json"} style={{ width: "100px", height: "100px" }} />
                <p className="offer-text">Collection Solutions</p>
              </div>
              <div className="col-md-2 offer-box">
                <Player autoplay loop src={"https://lottie.host/693c5e24-8f94-4f7d-8ff2-d933a0b415a0/Y4vOLzlthz.json"} style={{ width: "100px", height: "100px" }} />
                <p className="offer-text">Payout Solutions</p>
              </div>
              <div className="col-md-2 offer-box">
                <Player autoplay loop src={"https://lottie.host/96adc6e0-7f1e-4464-afa9-9feedf2205df/3BQWA2ZP0L.json"} style={{ width: "100px", height: "100px" }} />
                <p className="offer-text">Escrow Account</p>
              </div>
              <div className="col-md-2 offer-box">
                <Player autoplay loop src={"https://lottie.host/06421a3b-9532-4ff2-8c94-adbdfee2e53d/3mvlU4md6X.json"} style={{ width: "100px", height: "100px" }} />
                <p className="offer-text">Connected Banking</p>
              </div>
              <div className="col-md-2 offer-box">
                <Player autoplay loop src={"https://lottie.host/3bc2d2bc-168e-4960-a8bc-e0a4acfb965a/udxHiLa7Qc.json"} style={{ width: "100px", height: "100px" }} />
                <p className="offer-text">Structured Solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Merchant section */}
        {/* <section className="merchant-connect-section py-5">
        <div className="container d-flex align-items-center">
          <div className="lottie-animation w-50">
            <Player autoplay loop src={""} style={{width:"300px", height:"300px"}} />
          </div>
          <div className="merchant-text-container w-50">
            <div className="wavy-circle">
              <p className="wavy-text">Reliable Merchant Connect</p>
              <p className="wavy-text bold-text">Indus-Tech</p>
              <p className="wavy-text">With the most effortless coordinationn,</p>
              <p className="wavy-text">complete online onboarding, highlight-filled</p>
            </div>
          </div>
        </div>
      </section> */}
        <section className="merchant-connect-section py-5">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="merchant-image-container">
              <img src="./merchantImg.png" alt="Merchant Connect" className="merchant-image" />
            </div>
          </div>
        </section>

        <section className="customer-interaction-section py-5">
          <div className="container d-flex justify-content-center align-items-center flex-column text-center">
            <h2 className="interaction-title">
              Gateway without boundries
            </h2>
            <p className="interaction-subtitle">
              <strong>Unlock Growth </strong>with ease
            </p>
          </div>
        </section>

        <section className="footer-section">
          {/* <div className="footer-divider"></div> */}
          <div className="footer-container">
            <div className="footer-left">
              <p>©Info-Tech. All Rights Reserved.</p>
            </div>

            <div className="footer-middle">
              <p className="clickable" onClick={openPrivacyPopup}>Privacy Policy</p>
              <p onClick={openTermsPopup} className="clickable">Terms & Conditions</p>
            </div>

            <div className="footer-right">
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

          <div id="popup" className="popup hidden">
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <h3 id="popup-title"></h3>
            <p id="popup-body"></p>
          </div>
        </section>

        {showPrivacyPolicy && (
          <div className="privacy-overlay" onClick={closePrivacyPopup}>
            <div className="privacy-content" onClick={(e) => e.stopPropagation()}>
              <h1>Privacy Policy</h1>
              <p>
                This privacy policy sets out how IndusTech RMC PRIVATE LIMITED uses and protects any information that you give IndusTech RMC PRIVATE LIMITED when you use this website.
              </p>
              <p>
                IndusTech RMC PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.
              </p>
              <p>
                IndusTech RMC PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
              </p>
              <p style={{ fontWeight: "bold" }}>
                We may collect the following information:
              </p>
              <ul>
                <li>
                  <p style={{ textAlign: "left" }}>Name and job title</p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>Contact information including email address</p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>Demographic information such as postcode, preferences and interests</p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>Other information relevant to customer surveys and/or offers</p>
                </li>
              </ul>
              <p style={{ fontWeight: "bold" }}>What we do with the information we gather</p>
              <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
              <ul>
                <li>
                  <p style={{ textAlign: "left" }}>
                    Internal record keeping.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    We may use the information to improve our products and services.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
                  </p>
                </li>
              </ul>
              <p style={{ textAlign: "left" }}>
                We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
              </p>
              <ul>
                <li>
                  <p style={{ textAlign: "left" }}>YOUR RIGHTS & PREFERENCES AS A DATA SUBJECT: Subject to the ISO and applicable law’s limitations, the rights afforded to you as a data subject are:</p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT TO BE INFORMED: You have a right to be informed about the manner in which any of your personal data is collected or used which we have endeavored to do by way of this Policy.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT OF ACCESS: You have a right to access the personal data you have provided by requesting us to provide you with the same.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT TO RECTIFICATION: You have a right to request us to amend or update your personal data if it is inaccurate or incomplete.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>RIGHT TO ERASURE: You have a right to request us to delete your personal data.</p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT TO RESTRICT: You have a right to request us to temporarily or permanently stop processing all or some of your personal data.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT TO OBJECT: You have a right, at any time, to object to our processing of your personal data under certain circumstances. You have an absolute right to object to us processing your personal data for the purposes of direct marketing.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT TO DATA PORTABILITY: You have a right to request us to provide you with a copy of your personal data in electronic format and you can transmit that personal data for using another third-party’s product/service.
                  </p>
                </li>
                <li>
                  <p style={{ textAlign: "left" }}>
                    RIGHT NOT TO BE SUBJECT TO AUTOMATED DECISION-MAKING: You have a right to not be subject to a decision based solely on automated decision making, including profiling.
                  </p>
                </li>
              </ul>
              <p style={{ fontWeight: "bold" }}>How we use cookies</p>
              <p>Opt-in to cookies is a type of cookie compliance that requires the user to specifically accept the use of cookies on the site before we issue cookies.</p>
              <p>
                There are no cookies given to the user until they click "Accept" (or a similar confirmation button). This is the highest level of compliance.
              </p>
              <p>
                If the user chooses to "Accept" cookies, we run all of the scripts that use cookies. The user continues to use the site with cookies. Understand that scripts that use cookies are not loaded on the page until the user specifically accepts the cookie message.
              </p>
              <p>
                If the user chooses to "Deny" cookies, we allow them to continue browsing the site and disable all use of scripts that issue non-essential cookies. They are never given cookies and will continue to not get cookies throughout their time on your website.
              </p>
              <p>
                We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen. If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
              </p>
              <p>
                COMPLAINTS AND GRIEVANCE REDRESSAL: Any complaints or concerns in relation to your Personal Information or content of this Website or any dispute or breach of confidentiality or any proprietary rights of User during the use of the Website or any intellectual property of any User should be immediately informed to the Risk & Compliance Team by sending an email to info@indus-tech.co.in You acknowledge and agree that merely uninstalling the Platform from your mobile device will not result in the deletion of your information from the Platform, you'll have to revoke your consent for which you will have to send an email to info@indus-tech.co.in if you wish to have all your information deleted from the Platform databases and servers and upon receiving such an email, the company shall delete your personal information from its database within 72 working hours.
              </p>
              <p>
                In case of any other complaints regarding the company's products or services, kindly send an email to info@indus-tech.co.in.
              </p>
              <button btn btn-primary onClick={closePrivacyPopup}>Close</button>
            </div>
          </div>
        )}

        {showTerms && (
          <div className="privacy-overlay" onClick={closeTermsPopup}>
            <div className="privacy-content" onClick={(e) => e.stopPropagation()}>
              <h1>Terms & Conditions</h1>
              <p>
                The Website Owner, including subsidiaries and affiliates (“Website” or “Website Owner” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.
              </p>
              <p>
                Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern IndusTech RMC PRIVATE LIMITED's relationship with you in relation to this website.
              </p>
              <p>
                The term 'IndusTech RMC PRIVATE LIMITED' or 'us' or 'we'refers to the owner of the website whose registered/operational office is AG- 08 Tower A, Pioneer Urban Square, Sector 62, Gurgaon , 122102, +91 9289479436 . The term 'you' refers to the user or viewer of our website.
              </p>
              <h3>
                The use of this website is subject to the following terms of use:
              </h3>
              <ul>
                
                  <li>
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                  </li>
                  <li>
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                  </li>
                  <li>
                    Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                  </li>
                  <li>
                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </li>
                  <li>
                    All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
                  </li>
                  <li>
                    Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                  </li>
                  <li>
                    From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.
                  </li>
                  <li>
                    You may not create a link to this website from another website or document without IndusTech RMC PRIVATE LIMITED's prior written consent.
                  </li>
                  <li>
                    Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
                  </li>
                
              </ul>
              <h3>
                DATA PROTECTION ADDENDUM
              </h3>
              <p>
                This Data Protection Addendum ("Addendum") between IndusTech RMC Private Limited (“IndusTech RMC Private Limited” or “Company”) and the Customer (as defined in the Agreement) forms part of the IndusTech RMC Private Limited Terms & Conditions set forth at https://www.neokred.tech or such other written or electronic agreement incorporating this Addendum, in each case governing Customer's access to and use of the Services (the'Agreement'). Customer enters into this Addendum on behalf of itself and any Affiliates authorized to use the Services under the Agreement and who have not entered into a separate contractual arrangement with IndusTech RMC Private Limited. For the purposes of this Addendum only, and except where otherwise indicated, references to 'Customer' shall include Customer and such Affiliates.
              </p>
              <p>The Parties hereby agree that the terms and conditions set out below shall be added as an Addendum to the Agreement.</p>
              <h3>1.Definitions</h3>
              <p>In this Addendum, the following terms shall have the meanings set out below and cognate terms shall be construed accordingly:</p>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>
                'Affiliate' means an entity that owns or controls, is owned or controlled by or is or under common control or ownership with either Client or Company (as the context allows), where control is defined as the possession, directly or indirectly, of the power to direct or cause the direction of the management and policies of an entity, whether through ownership of voting securities, by contract or otherwise;
                </li>
                <li>'Customer Personal Data' means any Personal Data provided by or made available by Customer to IndusTech RMC Private Limited or collected by IndusTech RMC Private Limited on behalf of Customer which is Processed by IndusTech RMC Private Limited to perform the Services;</li>
                <li>'Controller to Processor Contractual Clauses' means the standard contractual clauses for cross-border transfers published by applicable Data Protection Laws or any similar such clauses adopted by a data protection regulator relating to Personal Data transfers to Third Countries, including without limitation any successor clauses thereto;</li>
                <li>'Data Protection Laws' means any local, state, or national law regarding the processing of Personal Data applicable to IndusTech RMC Private Limited in the jurisdictions in which the Services are provided to Customer, including, without limitation, privacy, security, and data protection law;</li>
                <li>'Services' means the services to be supplied by IndusTech RMC Private Limited to Customer or Customer's Affiliates pursuant to the Agreement; and</li>
                <li>'Third Country' means countries that, where required by applicable Data Protection Laws, have not received an adequacy decision from an applicable authority relating to cross-border data transfers of Personal Data, including regulators such as the European Commission, UK ICO, or Swiss FDPIC.</li>
              </ol>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>The terms 'Business', 'Business Purpose', 'commercial purpose','Contractor', 'Controller', 'Data Subject', 'Personal Data','Personal Data Breach', 'Process', 'Processor', 'Sell', 'Service Provider', 'Share', 'Subprocessor', 'Supervisory Authority', and'Third Party' have the same meanings as described in applicable Data Protection Laws and cognate terms shall be construed accordingly.</li>
                <li>Capitalized terms not otherwise defined in this Addendum shall have the meanings ascribed to them in the Agreement.</li>
              </ol>
              <h3>2.Roles of the Parties</h3>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>The Parties acknowledge and agree that with regard to the Processing of Customer Personal Data, and as more fully described in Annex 1 hereto, Customer acts as a Business or Controller, and IndusTech RMC Private Limited acts as a Service Provider or Processor. This Addendum shall apply solely to the Processing of Customer Personal Data by IndusTech RMC Private Limited acting as a Processor, Subprocessor, or Third Party (as specified in Annex 1).</li>
                <li>The Parties expressly agree that Customer shall be solely responsible for ensuring timely communications to Customer's Affiliates or the relevant Controller(s) who receive the Services, insofar as such communications may be required or useful in light of applicable Data Protection Laws to enable Customer's Affiliates or the relevant Controller(s) to comply with such Laws.</li>
              </ol>
              <h3>3.Description and Purpose of Personal Data Processing</h3>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>In Annex 1 to this Addendum, the Parties have mutually set out their understanding of the subject matter and details of the Processing of the Customer Personal Data to be Processed by IndusTech RMC Private Limited pursuant to this Addendum. The Parties may make reasonable amendments to Annex 1 on mutual written agreement and as reasonably necessary to meet those requirements. Annex 1 does not create any obligation or rights for any Party.</li>
                <li>The purpose of Processing under this Addendum is the provision of the Services pursuant to the Agreement and any Order Form(s).</li>
              </ol>
              <h3>4.Description of Personal Data Processing</h3>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>Customer shall comply with all applicable Data Protection Laws in connection with the performance of this Addendum and the Processing of Customer Personal Data. In connection with its access to and use of the Services, Customer shall Process Customer Personal Data within such Services and provide IndusTech RMC Private Limited with instructions in accordance with applicable Data Protection Laws. As between the Parties, Customer shall be solely responsible for compliance with applicable Data Protection Laws regarding the collection of and transfer to IndusTech RMC Private Limited of Customer Personal Data. Customer agrees not to provide IndusTech RMC Private Limited with any data concerning a natural person's health, religion or any special categories of data as per applicable laws.</li>
                <li>IndusTech RMC Private Limited shall comply with all applicable Data Protection Laws in the Processing of Customer Personal Data and IndusTech RMC Private Limited shall:
                  <ol style={{ listStyleType: 'decimal' }}>
                    <li>Process the Customer Personal Data for the purposes of the Agreement and for the specific purposes in each case as set out in Annex 1 to this Addendum and otherwise solely on the documented instructions of Customer, for the purposes of providing the Services and as otherwise necessary to perform its obligations under the Agreement. The Agreement, this Addendum, and Customer's use of the Services' features and functionality are Customer's written instructions to IndusTech RMC Private Limited in relation to Processing Customer Personal Data, including as follows:
                      <ul>
                        <li>
                        IndusTech RMC Private Limited shall use, retain, disclose, or otherwise Process Customer Personal Data only on behalf of Customer and for the specific business purpose of providing the Services and in accordance with Customer's instructions, including as described in the Agreement. IndusTech RMC Private Limited shall not Sell or Share Customer Personal Data, nor use, retain, disclose, or otherwise Process Customer Personal Data outside of its business relationship with Customer or for any other purpose (including IndusTech RMC Private Limited's commercial purpose) except as required or permitted by law. IndusTech RMC Private Limited shall immediately inform Customer (a) if IndusTech RMC Private Limited determines that it is no longer able to meet its obligations under Data Protection Laws or (b) if, in IndusTech RMC Private Limited's opinion, an instruction infringes applicable Data Protection Laws. Customer reserves the right to take reasonable and appropriate steps to ensure Graphite's Processing of Customer Personal Data is consistent with Customer's obligations under Data Protection Law and discontinue and remediate unauthorized use of Customer Personal Data;
                        </li>
                        <li>
                        IndusTech RMC Private Limited shall have rights to process Customer Personal Data solely (i) to the extent necessary to (a) perform the Business Purposes and its obligations under the Agreement; (b) operate, manage, test, maintain and enhance the Services including as part of its business operations; (c) to disclose aggregate statistics about the Services in a manner that prevents individual identification or re-identification of Customer Personal Data, including without limitation any individual device or individual person; and/or (d) protect the Services from a threat to the Services or Customer Personal Data; or (ii) if required by court order of a court or authorized governmental agency, provided that prior notice first be given to Customer; (iii) as otherwise expressly authorized by Customer;
                        </li>
                        <li>
                        IndusTech RMC Private Limited will not combine Customer Personal Data which IndusTech RMC Private Limited Processes on Customer's behalf, with Personal Data which it receives from or on behalf of another person or persons, or collects from its own interaction with individual, provided that Graphite may combine personal information to perform any Business Purpose permitted or required under the Agreement to perform the Services;
                        </li>
                      </ul>
                    </li>
                    <li>
                    Implement and maintain measures designed to ensure that IndusTech RMC Private Limited personnel authorized to process the Customer Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality unless disclosure is required by law or professional regulations;
                    </li>
                    <li>
                    implement and maintain the technical and organizational measures set out in the Agreement, and, taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of Processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, implement and maintain any further commercially reasonable and appropriate administrative, technical, and organizational measures designed to ensure a level of security appropriate to the risk of the Processing of Customer Personal Data, and specifically:
                    <ul>
                      <li>Pseudonymization and encryption of Customer Personal Data;</li>
                      <li>Ensuring ongoing confidentiality, integrity, availability and resilience of IndusTech RMC Private Limited's processing systems and services that process Customer Personal Data;</li>
                      <li>Restoring availability and access to Customer Personal Data in a timely manner in the event of a physical or technical incident; and</li>
                      <li>Regularly testing, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing of the Customer Personal Data</li>
                    </ul>
                    </li>
                    <p>Customer hereby agrees that IndusTech RMC Private Limited is generally authorized to engage and appoint Sub-processors, and specifically the Sub-processors listed in Annex 2 hereto, subject to IndusTech RMC Private Limited's:
                      <ul>
                        <li>Notifying Customer at least thirty (30) calendar days in advance oof any intended changes or additions to its Sub-processors listed in Annex 2 by emailing notice of the intended change to Customer;</li>
                        <li>including data protection obligations in its contract with each Sub-processor that are materially the same as those set out in this Addendum; and</li>
                        <li>Remaining liable to Customer for any failure by each Sub-processor to fulfil its obligations in relation to the Processing of the Customer Personal Data.</li>
                      </ul>
                    </p>
                  </ol>
                </li>
              </ol>
              <p style={{fontWeight:"bold"}}>
              In relation to any notice received under section 4.2(d)(i), Customer shall have a period of 30 (thirty) days from the date of the notice to inform IndusTech RMC Private Limited in writing of any reasonable objection on data protection grounds to the use of that Sub-processor. The parties will then, for a period of no more than 30 (thirty) days from the date of Customer's objection, work together in good faith to attempt to find a commercially reasonable solution for Customer which avoids the use of the objected-to Sub-processor. Where no such solution can be found, either Party may (notwithstanding anything to the contrary in the Agreement) terminate the relevant Services immediately on written notice to the other Party, without damages, penalty or indemnification whatsoever (but without prejudice to any fees incurred by Customer prior to termination);
              </p>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>
                To the extent legally permissible, promptly notify Customer in case of any legally binding requests (i.e., disclosures required by law, court order, or subpoena) for disclosure of Customer Personal Data by IndusTech RMC Private Limited. In case if it is not legally binding then Customer Personal Data would not be disclosed and IndusTech RMC Private Limited will notify the Customer of such request rejection. A record of all legally binding disclosure requests relating to Customer Personal Data shall be maintained.
                </li>
                <li>
                To the extent legally permissible, promptly notify Customer of any communication from a Data Subject regarding the Processing of Customer Personal Data, or any other communication (including from a Supervisory Authority) relating to any obligation under the applicable Data Protection Laws in respect of the Customer Personal Data. IndusTech RMC Private Limited will not respond to any such request or complaint unless expressly authorized to do so by Customer or is otherwise required to respond under applicable Data Protection Laws. Taking into account the nature of the Processing, IndusTech RMC Private Limited will reasonably assist Customer (or the relevant Controller) by appropriate technical and organizational measures, insofar as this is possible, for the fulfilment of Customer's, Customer's Affiliates' or the relevant Controller(s)' obligation to respond to requests for exercising the data subject's rights. Customer agrees to pay IndusTech RMC Private Limited for time and for out-of-pocket expenses incurred by IndusTech RMC Private Limited in connection with the performance of its obligations under this Section 4.2(e);
                </li>
                <li>
                Upon IndusTech RMC Private Limited's becoming aware of a Personal Data Breach involving Customer Personal Data, notify Customer without undue delay, of any Personal Data Breach involving Customer Personal Data, such notice to include, to the extent reasonably available to IndusTech RMC Private Limited, all timely information reasonably required by Customer (or the relevant Controller) to comply with its data breach reporting obligations under the applicable Data Protection Laws. IndusTech RMC Private Limited shall further take all such measures and actions as are necessary to remedy or mitigate the effects of such Security Incident and shall keep Customer reasonably informed of developments concerning Customer Personal Data;
                </li>
                <li>
                To the extent required by the applicable Data Protection Laws, provide reasonable assistance to Customer, Customer's Affiliates'or the relevant Controller(s)' with its obligations pursuant to applicable Data Protection Laws taking into account the nature of the Processing and information available to IndusTech RMC Private Limited; Customer agrees to pay IndusTech RMC Private Limited for time and for out of pocket expenses incurred by IndusTech RMC Private Limited in connection with any assistance provided in connection with applicable laws;
                </li>
                <li>
                Cease Processing the Customer Personal Data upon the termination or expiry of the Agreement, and at option of Customer, Customer's Affiliates or the relevant Controller(s) either return or delete (including by ensuring such data is in non-readable format) all copies of the Customer Personal Data Processed by IndusTech RMC Private Limited, unless (and solely to the extent and for such period as) applicable law requires IndusTech RMC Private Limited to retain some or all of the Customer Personal Data. Any such Customer Personal Data retained shall remain subject to the obligations of confidentiality set forth in the Agreement; and
                </li>
                <li>
                IndusTech RMC Private Limited shall maintain the necessary records in support of demonstrating compliance with its obligations (as specified in the applicable contract) for the processing of Customer Personal Data carried out on behalf of the Customer.
                </li>
                <li>
                Make available to Customer all information reasonably necessary to demonstrate compliance with this Addendum and allow for and contribute to audits, including inspections, by Customer, or an independent third party auditor mandated by Customer, provided that Customer gives IndusTech RMC Private Limited reasonable prior notice of its intention to audit, conducts its audit during IndusTech RMC Private Limited's normal business hours, and takes all reasonable measures to prevent unnecessary disruption to IndusTech RMC Private Limited's operations. For the purposes of demonstrating compliance with this Addendum under this Section 4.2(i), the Parties agree that in the first instance, once per year during the term of the Agreement (except if and when required by instruction of a competent Supervisory Authority or where Customer believes a further audit is necessary due to a Personal Data Breach concerning Customer Personal Data suffered by IndusTech RMC Private Limited), IndusTech RMC Private Limited will provide to Customer responses to cybersecurity and other assessments and only where Customer cannot establish IndusTech RMC Private Limited's compliance with this Addendum from IndusTech RMC Private Limited's responses shall Customer request to inspect IndusTech RMC Private Limited's processing operations. Customer agrees to pay IndusTech RMC Private Limited for time and for out of pocket expenses incurred by IndusTech RMC Private Limited in connection with assistance provided in connection with such audits, responses to cybersecurity and other assessments.
                </li>
                <li>Restricted Transfers
                  <ul>
                    <li>The parties agree that when the transfer of Customer Personal Data from Customer and/or any of its Affiliates (as exporter) to IndusTech RMC Private Limited (as importer) is a Restricted Transfer and relevant Area Law applies, the transfer shall be subject to the appropriate Controller to Processor Contractual Clauses.</li>
                  </ul>
                </li>
                <li>Precedence
                  <ul>
                    <li>
                    The provisions of this Addendum are supplemental to the provisions of the Agreement. In the event of any inconsistency between the provisions of this Addendum and the provisions of the Agreement, the provisions of this Addendum shall prevail. In the event that any provision of this Addendum and/or the Agreement contradicts, directly or indirectly, the Controller to Processor Contractual Clauses, the Controller to Processor Contractual Clauses will control.
                    </li>
                  </ul>
                </li>
                <li>Indemnity
                  <ul>
                    <li>
                    To the extent permissible by law, Customer shall (a) defend IndusTech RMC Private Limited and its Affiliates (collectively, “Indemnified Parties”) from and against any and all claims, demands, suits, or proceedings made or brought against any of the Indemnified Parties by any third party (each, a “Claim”), and (b) indemnify and hold harmless the Indemnified Parties from and against any and all losses, damages, liabilities, fines and administrative fines, penalties, settlements, and costs and expenses of any kind (including, without limitation, reasonable legal, investigatory and consultancy fees and expenses) incurred or suffered by any of the Indemnified Parties, in each case arising from any breach by Customer of this Addendum or of its obligations under applicable Data Protection Laws. IndusTech RMC Private Limited may participate in the defence and/or settlement of a Claim under this Section 7.1 with counsel of its choosing at its own expense.
                    </li>
                  </ul>
                </li>
                <li>Severability
                  <ul>
                    <li>
                    The Parties agree that, if any section or sub-section of this Addendum is held by any court or competent authority to be unlawful or unenforceable, it shall not invalidate or render unenforceable any other section of this Addendum.
                    </li>
                  </ul>
                </li>
                <li>Miscellaneous
                  <ol style={{ listStyleType: 'decimal' }}>
                    <li>The Addendum considers the following and follows:
                      <ul>
                        <li>Privacy by Design and default</li>
                        <li>Achieving security of Processing</li>
                        <li>Notification of breaches involving Customer Personal Data to the relevant Supervisory Authority</li>
                        <li>Notification of breaches involving Customer Personal Data to Customer</li>
                        <li>Conducting Privacy Impact Assessment where appropriate and required by applicable Data Protection Law</li>
                        <li>Assurance of IndusTech RMC Private Limited's assistance by if prior consultations with relevant Supervisory Authorities are needed and required by applicable Data Protection Laws.</li>
                      </ul>
                    </li>
                    <li>IndusTech RMC Private Limited shall comply with all statutory and regulatory requirements, ISO 27001:2013, ISO 27701:2019 and DPDPA requirements.</li>
                    <li>
                    In the event a Data Subject wishes to exercise its data subject rights under applicable Data Protection Law, including, but not limited to, a data subject's right of access, correction and/or erasure of its Personal Data in IndusTech RMC Private Limited's control, the Data Subjects can submit such request done by contacting IndusTech RMC Private Limited's Data Protection Officer (DPO) below. Also for raising concerns and/or any complaints related to the Customer Personal Data that can be done by contacting the Data Protection Officer below:
                    <ul>
                      <li>Name: Tarun Suresh Nazare</li>
                      <li>Email ID: tarun@neokred.tech</li>
                    </ul>
                    </li>
                    <li>There are no Temporary files getting generated during processing.</li>
                  </ol>
                </li>
              </ol>
              <p style={{fontWeight:"bold"}}>Annex 1 to Data Protection Addendum</p>
              <p style={{fontWeight:"bold"}}>Description of Processing Activities for Customer Personal Data</p>
              <h3>1. List of Parties</h3>
              <h4>Data Exporter</h4>
              <p>Name - Customer (as defined in the Agreement)</p>
              <p>Address - As set forth in the relevant Order Form.</p>
              <p>Role (controller/processor) : As set forth in the relevant Order Form.</p>
              <p>Signature and date : Recipient of the Services provided by IndusTech RMC Private Limited in accordance with the Agreement.</p>
              <p>Activities relevant to the data transferred under these Clauses - Signature and date are set out in the Agreement.</p>
              <p>Contact person's name, position and contact details : Controller</p>
              <h4>Data Importer</h4>
              <p>Name - IndusTech RMC Private Limited</p>
              <p>Address - AG- 08 Tower A, Pioneer Urban Square, Sector 62, Gurgaon , 122102</p>
              <p>Role (controller/processor) : Tarun Suresh Nazare, Director, Co-Founder & CEO tarun@neokred.tech</p>
              <p>Signature and date : Provision of the Services to the Customer in accordance with the Agreement.</p>
              <p>Activities relevant to the data transferred under these Clauses - Signature and date are set out in the Agreement.</p>
              <p>Contact person's name, position and contact details : Processor</p>
              <h3>2. Competent Supervisory Authority</h3>
              <p>Identify the competent supervisory authority/ies in accordance with Applicable Data Protection Clause - Data Protection Authority</p>
              <h3>3. Processing Information</h3>
              <p>Subject matter and duration of the Processing of the Personal Data</p>
              <p>The subject matter of the processing of personal data is to onboard the customer into our Customer applications, completing the KYC of customers and creating behavioral analytics of customers. The duration of the processing will extend for as long as necessary to achieve the specified purpose. Typically, this will include the entire duration of the customer or employee relationship, and data may be retained for a specific period following the termination of the relationship as per legal requirements and company policies.</p>
              <p>The nature and purpose of the Processing of the Personal Data</p>
              <p>Nature: Neokred process personal data primarily for financial technology-related services and other products associated with us. Focusing on verifying the identity of the customer to prevent fraudulent activities and specialize in collecting and maintaining information about individuals and businesses. Purpose: The purpose of processing personal data in fintech is to facilitate secure and efficient financial transactions, provide personalized financial services, and ensure compliance with regulatory requirements. Personal data is often used for identity verification, risk assessment, and improving user experiences.</p>
              <h3>The categories of Data Subject to whom the Customer Personal Data relates</h3>
              <p>The types of data include:</p>
              <h4>Personal information
                <ul>
                  <li>Employment information</li>
                  <li>Credit background</li>
                  <li>Behavioural analysis</li>
                </ul>
              </h4>
              <h4>The types of Customer Personal Data to be Processed
                <ul>
                  <li>Personal identification information: This may include names, date of birth, gender, contact details (such as mobile numbers, email addresses), and residential addresses.</li>
                  <li>Financial information: This may involve bank account details and financial transaction records.</li>
                  <li>Employment information: Details related to employment history, occupation, and employer information.</li>
                  <li>Geolocation data: We may collect location data through mobile applications or other means.</li>
                </ul>
              </h4>
              <h4>Special categories of data</h4>
              <p>None</p>
              <h4>The obligations and rights of Client</h4>
              <p>The obligations and rights of Client are set out in the Terms and this Addendum.</p>
              <h4>Data exporter (as applicable)</h4>
              <p>The data exporter is: Client of Company that uses the Services</p>
              <p>Data importer (as applicable)</p>
              <p>The data importer is: IndusTech RMC Private Limited, a company that provides services to the client, which requires receiving the Client's query data</p>
              <h4>Processing operations (as applicable)</h4>
              <p style={{fontWeight:"bold"}}>
              The personal data transferred will be subject to the following basic processing activities: The provision of Company Services to Client. In order to provide people data, Company receives identifying Personal Data to permit Company to query, cleanse, standardize, enrich, (when required) send to additional data to feed providers, and to store the query information.
              </p>
              <p style={{fontWeight:"bold"}}>4. Technical and Organisational Security Measures</p>
              <p style={{fontWeight:"bold"}}>Description of the technical and organisational security measures implemented by IndusTech RMC Private Limited as the data processor/data importer to ensure an appropriate level of security, taking into account the nature, scope, context, and purpose of the processing, and the risks for the rights and freedoms of natural persons.</p>
              <p style={{fontWeight:"bold"}}>4.1. Security</p>
              <p style={{fontWeight:"bold"}}>Security Management System.
                <ol style={{ listStyleType: 'decimal' }}>
                  <li>Organization. IndusTech RMC Private Limited designates qualified security personnel whose responsibilities include development, implementation, and ongoing maintenance of the Information Security Program.</li>
                  <li>Policies. Management reviews and supports all security related policies to ensure the security, availability, integrity and confidentiality of Customer Personal Data. These policies are updated at least once annually.</li>
                  <li>Assessments. IndusTech RMC Private Limited engages a reputable independent third-party to perform risk assessments of all systems containing Customer Personal Data at least once annually.</li>
                  <li>Risk Treatment. IndusTech RMC Private Limited maintains a formal and effective risk treatment program that includes penetration testing, vulnerability management and patch management to identify and protect against potential threats to the security, integrity or confidentiality of Customer Personal Data.</li>
                  <li>Vendor Management. IndusTech RMC Private Limited maintains an effective vendor management program</li>
                  <li>Incident Management. IndusTech RMC Private Limited reviews security incidents regularly, including effective determination of root cause and corrective action.</li>
                  <li>Standards. IndusTech RMC Private Limited operates an information security management system that complies with the requirements of ISO/IEC 27001:2013 standard.</li>
                </ol>
              </p>
              <p style={{fontWeight:"bold"}}>4.2. Personnel Security.
                <ol style={{ listStyleType: 'decimal' }}>
                  <li>
                  IndusTech RMC Private Limited personnel are required to conduct themselves in a manner consistent with the company's guidelines regarding confidentiality, business ethics, appropriate usage, and professional standards. IndusTech RMC Private Limited conducts reasonably appropriate background checks on any employees who will have access to Customer data under this Agreement, including in relation to employment history and criminal records, to the extent legally permissible and in accordance with applicable local labor law, customary practice and statutory regulations.
                  </li>
                  <li>
                  Personnel are required to execute a confidentiality agreement in writing at the time of hire and to protect Customer Personal Data at all times. Personnel must acknowledge receipt of, and compliance with, IndusTech RMC Private Limited's confidentiality, privacy and security policies. Personnel are provided with privacy and security training on how to implement and comply with the Information Security Program. Personnel handling Customer Personal Data are required to complete additional requirements appropriate to their role (e.g., certifications). IndusTech RMC Private Limited's personnel will not process Customer Personal Data without authorization.
                  </li>
                </ol>
              </p>
              <p style={{fontWeight:"bold"}}>4.3. Access Controls
                <ol style={{ listStyleType: 'decimal' }}>
                  <li>
                  Access Management. IndusTech RMC Private Limited maintains a formal access management process for the request, review, approval and provisioning of all personnel with access to Customer Personal Data to limit access to Customer Personal Data and systems storing, accessing or transmitting Customer Personal Data to properly authorized persons having a need for such access. Access reviews are conducted periodically to ensure that only those personnel with access to Customer Personal Data still require it.
                  </li>
                  <li>
                  Infrastructure Security Personnel. IndusTech RMC Private Limited has, and maintains, a security policy for its personnel, and requires security training as part of the training package for its personnel. IndusTech RMC Private Limited's infrastructure security personnel are responsible for the ongoing monitoring of IndusTech RMC Private Limited's security infrastructure, the review of the Services, and for responding to security incidents.
                  </li>
                  <li>
                  Access Control and Privilege Management. IndusTech RMC Private Limited's and Customer's administrators and end users must authenticate themselves via a Multi-Factor authentication system or via a single sign on system in order to use the Services
                  </li>
                  <li>
                  Internal Data Access Processes and Policies - Access Policy. IndusTech RMC Private Limited's internal data access processes and policies are designed to protect against unauthorized access, use, disclosure, alteration or destruction of Customer Personal Data. IndusTech RMC Private Limited designs its systems to only allow authorized persons to access data they are authorized to access based on principles of “least privileged” and “need to know”, and to prevent others who should not have access from obtaining access. IndusTech RMC Private Limited requires the use of unique user IDs, strong passwords, two factor authentication and carefully monitored access lists to minimize the potential for unauthorized account use. The granting or modification of access rights is based on: the authorized personnel's job responsibilities; job duty requirements necessary to perform authorized tasks; a need to know basis; and must be in accordance with IndusTech RMC Private Limited's internal data access policies and training. Approvals are managed by workflow tools that maintain audit records of all changes. Access to systems is logged to create an audit trail for accountability. Where passwords are employed for authentication (e.g., login to workstations), password policies follow industry standard practices. These standards include password complexity, password expiry, password lockout, restrictions on password reuse and re-prompt for password after a period of inactivity.
                  </li>
                </ol>
              </p>
              <p style={{fontWeight:"bold"}}>4.4. Data Centre and Network Security</p>
              <p style={{fontWeight:"bold"}}>Data Centres.</p>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>Infrastructure. IndusTech RMC Private Limited has AWS as its data centre.</li>
                <li>Resiliency. Multi Availability Zones are enabled on AWS and IndusTech RMC Private Limited conducts Backup Restoration Testing on regular basis to ensure resiliency.</li>
                <li>Server Operating Systems. IndusTech RMC Private Limited's servers are customized for the application environment and the servers have been hardened for the security of the Services. IndusTech RMC Private Limited employs a code review process to increase the security of the code used to provide the Services and enhance the security products in production environments.</li>
                <li>Disaster Recovery. IndusTech RMC Private Limited replicates data over multiple systems to help to protect against accidental destruction or loss. IndusTech RMC Private Limited has designed and regularly plans and tests its disaster recovery programs.</li>
                <li>Security Logs. IndusTech RMC Private Limited's systems have logging enabled to their respective system log facility in order to support the security audits, and monitor and detect actual and attempted attacks on, or intrusions into, IndusTech RMC Private Limited's systems.</li>
                <li>Vulnerability Management. IndusTech RMC Private Limited performs regular vulnerability scans on all infrastructure components of its production and development environment. Vulnerabilities are remediated on a risk basis, with Critical, High and Medium security patches for all components installed as soon as commercially possible.</li>
              </ol>
              <p style={{fontWeight:"bold"}}>Networks and Transmission.</p>
              <ol style={{ listStyleType: 'decimal' }}>
                <li>Data Transmission. Transmissions on production environment are transmitted via Internet standard protocols.</li>
                <li>External Attack Surface. AWS Security Group which is equivalent to virtual firewall is in place for Production environment on AWS.</li>
                <li>Incident Response. IndusTech RMC Private Limited maintains incident management policies and procedures, including detailed security incident escalation procedures. IndusTech RMC Private Limited monitors a variety of communication channels for security incidents, and IndusTech RMC Private Limited's security personnel will react promptly to suspected or known incidents, mitigate harmful effects of such security incidents, and document such security incidents and their outcomes.</li>
                <li>Incident Response. IndusTech RMC Private Limited maintains incident management policies and procedures, including detailed security incident escalation procedures. IndusTech RMC Private Limited monitors a variety of communication channels for security incidents, and IndusTech RMC Private Limited's security personnel will react promptly to suspected or known incidents, mitigate harmful effects of such security incidents, and document such security incidents and their outcomes.</li>
              </ol>
              <p style={{fontWeight:"bold"}}>4.5. Data Storage, Isolation, Authentication, and Destruction.</p>
              <p style={{fontWeight:"bold"}}>IndusTech RMC Private Limited stores data in a multi-tenant environment on AWS servers. Data, the Services database and file system architecture are replicated between multiple availability zones on AWS. IndusTech RMC Private Limited logically isolates the data of different customers. A central authentication system is used across all Services to increase uniform security of data. IndusTech RMC Private Limited ensures secure disposal of Customer Data through the use of a series of data destruction processes.</p>
              <p>Annex 2</p>
              <p>IndusTech RMC Private Limited's Sub-processors</p>
              <h3>1. List of Parties</h3>
              <h4>Data Exporter</h4>
              <p>Google Workspace - Email services - India</p>
              <p>Tally - Invoicing & ERP solution - India</p>
              <p>Github - Code version control - US</p>
              <p>WhatsApp - Messaging - US</p>
              <p>We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the pre-set limit mutually agreed by us with our acquiring bank from time to time</p>
              <button btn btn-primary onClick={closeTermsPopup}>Close</button>
            </div>
          </div>
        )}


        {/* <section className="vision-section py-5">
          <div className="container d-flex align-items-center">
            <div className="vision-text w-50">
              <h2 className="vision-title">Transforming Technology for <span className="highlighted-text">Your Business</span></h2>
              <p className="vision-subtitle">
                Fueling Business Expansion with our Cutting-Edge Payment Solutions
              </p>
              <button className="btn get-started-btn">Get Started Today</button>
            </div>

            <div className="lottie-animation w-50">
              <Player
                autoplay
                loop
                src={"https://lottie.host/8dd7a97a-bae7-4290-a210-b2093d86a92c/Agchp1uLtK.json"}
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </div>
        </section> */}

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          {/* <Route path="PrivayPolicy" element={<PrivacyPolicy />} /> */}
        </Routes>

      </div>
    </Router >



  );
};

export default App;