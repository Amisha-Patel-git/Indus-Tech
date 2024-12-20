import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();


  const handlePhoneChange = async (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      alert("Please enter numbers only in the phone input!");
      return;
    }
    if (value.length > 10) {
      alert("Phone number cannot be more than 10 digits!");
      return;
    }

    setPhone(value);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    console.log("Login handler called");
  };

  const handleSignUpValidation = async (e) => {

    e.preventDefault(); // Stop default form submission

    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    } else {
      setPasswordError("");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    const user = {
      yourname: name,
      phone: phone,
      email: email,
      password: password
    };

    try{
      const response = await axios.post("http://localhost:3005/upload", user,{
        headers: {
          "Content-Type": "application/json",
      },
      });

      if (response && response.data) {
        alert("Signup successful! Please check your email for further proceedings.");
        
        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");

      } else {
        alert("Signup failed. Please try again.");
      }
    }catch(error){
      console.error("Error during signup:", error.response || error.message);
      alert("Error during signup. Please try again later.");
    }


  setFormSubmitted(true);
  // alert("Form submitted successfully!");

  setName("");
  setEmail("");
  setPhone("");
  setPassword("");
  setConfirmPassword("");
  setPasswordError("");
};

const [showRegisterForm, setShowRegisterForm] = useState(false);
const openRegisterForm = () => setShowRegisterForm(true);
const closeRegisterForm = () => setShowRegisterForm(false);

return (
  <>
    <style>
      {`
        .signup{
    
    top: 0;
    left: 0;
    width: 98vw;
    height: 100vh;
    // background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.signup-content{
    display: flex;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 70%;
    max-width: 900px;
    /* height: 400px; */
}
.popup-left{
    flex: 1;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}
.popup-left img{
    max-width: 100%;
    height: auto;
}
.popup-right{
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(to bottom right, #ffffff, #f0f4ff);
}
.popup-right h2{
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}
.popup-right form{
    display: flex;
    flex-direction: column;
}
.popup-right input{
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}
.popup-right .btn-submit{
    padding: 10px;
    background: #0056b3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
.popup-right .btn-submit:hover{
    background: #003d80;
}
.link{
    color: #007bff;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #007bff;
    border-radius: 5px;
    display: inline-block;
    transition: all 0.3s ease;
}
.link:hover{
    background: #007bff;
    color: white;
    text-decoration: none;
}
.popup-right p{
    margin-top: 20px;
    text-align: center;
}
    .register-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #007bff;
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1001;  /* Ensure the icon is above other content */
        }
            .error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
  @media (max-width: 768px) {
          .signup-content {
            flex-direction: column;
            width: 90%;
            max-width: 100%;
          }

          .popup-left {
            display: none;
          }

          .popup-right {
            padding: 15px;
          }

          .register-icon {
            bottom: 10px;
            right: 10px;
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .popup-right h2 {
            font-size: 20px;
          }

          .popup-right input, .popup-right textarea {
            font-size: 14px;
          }

          .popup-right .btn-submit {
            font-size: 14px;
            padding: 8px;
          }

          .register-icon {
            padding: 8px;
          }
        }
        `}
    </style>
    <div className="signup" >
      <div className="signup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-left">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Background" />
        </div>
        <div className="popup-right">
          <h2>Sign Up</h2>
          <form
            onSubmit={handleSignUpValidation}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="tel" placeholder="Phone" value={phone} onChange={handlePhoneChange} required />
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
            {passwordError && <p className="error" style={{ color: "red", marginTop: "10px" }}>{passwordError}</p>}


            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>

      <div
        className="register-icon"
        onClick={() => navigate("/talktoexperts")}
      >
        <i className="fas fa-user-plus"></i>
      </div>

    </div>
    {/* {showRegisterForm && (
        <RegisterForm closeForm={closeRegisterForm} />
      )} */}
  </>
)

};


export default SignUp;