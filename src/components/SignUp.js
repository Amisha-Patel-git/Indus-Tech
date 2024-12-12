import React from "react";
import emailjs from "@emailjs/browser";

const SignUp=()=>{
    const handelQuerySubmit=(e)=>{
        e.preventDefault();
        const name=document.getElementById("queryName").value;
        const email=document.getElementById("queryEmail").value;
        const phone=document.getElementById("queryPhone").value;
        const message=document.getElementById("queryMessage").value;
        emailjs.send(
          "service_1uqy3uw",
          "template_tzm0oxn",
          {name, email, phone, message},
          "bb5-fCrdgOphgHy-2"
        )
        .then(
          (response)=>{
            alert("Query sent successfully!");
            document.getElementById("queryName").value="";
            document.getElementById("queryEmail").value="";
            document.getElementById("queryPhone").value="";
            document.getElementById("queryMessage").value="";
          },
          (error)=>{
            console.error("Emailjs error:", error);
            alert("Failed to send query. Please try again.");
          }
        );
      };
    return(
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
        `}
      </style>
        <div className="signup" >
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
                  <input type="text" placeholder="Name" id="queryName" required />
                  <input type="tel" placeholder="Phone" id="queryPhone" required />
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
                  <button type="submit" className="btn-submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          </>
    )
}

export default SignUp;