import React, {useState} from "react";
import emailjs from "@emailjs/browser";
import '@fortawesome/fontawesome-free/css/all.css';

const RegisterForm=({ closeForm })=>{

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    
      // Handle form input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`${name}: ${value}`);
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handelQuerySubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Before Sending:", formData);
    
        // Send email using emailjs
        emailjs
          .send(
            "service_1uqy3uw",
            "template_tzm0oxn",
            formData,
            "bb5-fCrdgOphgHy-2"
          )
          .then(
            (response) => {
              alert("Query sent successfully!");
              // Clear the form after successful submission
              setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
              });
              // Close the form
              closeForm();
            },
            (error) => {
              console.error("Emailjs error:", error);
              alert("Failed to send query. Please try again.");
            }
          );
      };
    return(
      <>
      <style>
        {`
.signup-content{
    display: flex;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 70%;
    max-width: 900px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    /* height: 400px; */
    pointer-events: all;
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
    pointer-events: all;
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
    .signup-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5); /* Overlay effect */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
            .popup-close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #ff0000;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            z-index: 1010;
          }
            @media (max-width: 768px) {
                    .signup-content {
                        width: 90%;
                        flex-direction: column;
                    }
                    .popup-right {
                        padding: 15px;
                    }
                    .popup-right h2 {
                        font-size: 20px;
                    }
                    .popup-right input, .popup-right textarea {
                        font-size: 14px;
                    }
                    .popup-right .btn-submit {
                        font-size: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .signup-content {
                        width: 100%;
                    }
                    .popup-right h2 {
                        font-size: 18px;
                    }
                    .popup-right input, .popup-right textarea {
                        font-size: 12px;
                        padding: 8px;
                    }
                    .popup-right .btn-submit {
                        font-size: 12px;
                        padding: 8px;
                    }
                }
        `}
      </style>
        <div className="signup-popup" onClick={closeForm}>
            <div className="signup-content" onClick={(e) => e.stopPropagation()}>
              <div className="popup-left">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="Background" />
              </div>
              <div className="popup-right">
                <h2>Register with Us</h2>
                <form
                  // onSubmit={(e) => {
                  //   e.preventDefault();
                  //   handleLogin();
                  //   handleSignUpValidation();
                  //   handelQuerySubmit(e);
                  // }}
                  onSubmit={handelQuerySubmit}>
                  {/* <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone" required />
                  <input type="password" id="password" placeholder="Password" required />
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required />
                  {passwordError && <p className="error">{passwordError}</p>}
                  <button type="submit" className="btn-submit">Sign Up</button> */}
                  <input type="text" placeholder="Name" name="name" id="queryName" onChange={handleInputChange} defaultValue={formData.name} required />
                  <input type="tel" placeholder="Phone" name="phone" id="queryPhone" onChange={handleInputChange} defaultValue={formData.phone} required />
                  <input
                    type="email"
                    placeholder="Your Email"
                    id="queryEmail"
                    name="email"
                    onChange={handleInputChange}
                    defaultValue={formData.email}
                    required
                  />
                  <textarea
                    placeholder="What Solution are you looking for?"
                    id="queryMessage"
                    name="message"
                    rows="5"
                    onChange={handleInputChange}
                    defaultValue={formData.message}
                    required
                  ></textarea>
                  <button type="submit" className="btn-submit">Submit</button>
                </form>
                <button className="popup-close-btn" onClick={closeForm}>X</button> {/* Close button */}
              </div>
            </div>
          </div>
          </>
    )
}

export default RegisterForm;