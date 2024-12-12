import React from "react";
import { useNavigate } from "react-router-dom";

// const navigate=useNavigate();

const AboutUs=()=>{
    return(
      <>
      <style>
        {`
        .about-us{
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.about-us-content{
    background: #fff;
    border-radius: 15px;
    width: 100%;
    /* max-width: 900px; */
    padding: 20px;
    overflow-y: auto;
    max-height: 80%;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    animation: fadeIn 0.5s ease-in-out;
    margin-top: 10vh;
    margin-bottom: 10px;
}
.about-heading{
    text-align: center;
    font-size: 32px;
    color: #ff5722;
    margin-bottom: 20px;
}
.close-btn{
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    color: #555;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3ms;
}
.close-btn:hover{
    color: #f00;
}
.about-section{
    margin-bottom: 20px;
}
.about-section h3{
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
}
.content{
    display: flex;
    align-items: center;
    gap: 15px;
}
.about-image{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}
.content p{
    font-size: 16px;
    color: #555;
}
.stand-for{
    font-size: 24px;
    font-weight: bold;
    color: #ff5722;
    margin-bottom: 20px;
}
.rmc-section{
    text-align: center;
    margin-top: 20px;
}
.rmc-container{
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
.rmc-box{
    background: #f5f5f5;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.rms-box h3{
    font-size: 36px;
    color: #f57c00;
}
.rmc-box p{
    font-size: 14px;
    color: #f48787;
}
@keyframes fadeIn{
    from{
        opacity: 0;
        transform: scale(0.95);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
}
        `}
      </style>
        <div className="about-us">
            <div className="about-us-content">
              {/* <button className="close-btn" onClick={closeAboutUs}>&times;</button> */}
              <h2 className="about-heading">Know Us More</h2>
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
          </>
    );
};

export default AboutUs;