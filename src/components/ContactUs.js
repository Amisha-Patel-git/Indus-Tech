import React from "react";
import ContactusForm from "./ContactusForm";


const ContactUs=()=>{

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

    return(
        <>
        <style>
          {`
.contact-container {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin-top: 90px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 9999;
        }
        .contact {
          background: #ffffff;
          border-radius: 10px;
          width: 80%;
          max-width: 700px;
          overflow: hidden;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .contact-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 20px;
          padding: 20px;
        }
        .contact-info {
          flex: 1;
        }
        .contact-info h2 {
          margin-bottom: 15px;
          color: #ff5722;
          font-size: 24px;
        }
        .contact-info p {
          margin: 8px 0;
          line-height: 1.5;
          font-size: 16px;
        }
        .contact-info a {
          color: #ff5722;
          text-decoration: none;
        }
        .contact-info a:hover {
          text-decoration: underline;
        }
        .map-container {
          width: 100%;
          margin-top: 20px;
          background: #f5f5f5;
          border-radius: 8px;
        }
        .contact-form-container {
          width: 30%; /* The form will take up 30% of the container width */
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow:rgba(0, 0, 0, 0.25) 0px 8px 64px 0px; /* Adding shadow around the form */
          margin-left: 20px;
          margin-top: 60px; /* Adding margin to move it down from the top */
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          font-size: 24px;
          cursor: pointer;
          color: #ff5722;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media screen and (max-width: 768px) {
          .contact-content {
            flex-direction: column;
            align-items: center;
          }
          .contact-info {
            min-width: 100%;
            text-align: center;
          }
          .map-container {
            min-width: 100%;
            margin-top: 20px;
          }
          iframe {
            height: 250px;
          }
          .contact-form-container {
            width: 100%;
            margin-top: 20px;
            margin-left: 0;
          }
        }
        @media screen and (max-width: 480px) {
          .contact-info h2 {
            font-size: 20px;
          }
          .contact-info p {
            font-size: 12px;
          }
          iframe {
            height: 200px;
          }
        }
          `}
        </style>
        <div className="contact-container">
            <div className="contact">
              {/* <button className="close-button" onClick={() => setShowContactPopup(false)}>&times;</button> */}
              <div className="contact-content">
                <div className="contact-info">
                  <h2>Contact Us</h2>
                  <p style={{color:"#000"}}><strong>Registered Address:</strong>H-61, Office number- 15, 2nd floor, sector-63,Noida, India, 201301</p>
                  <p style={{color:"#000"}}><strong>Corporate Address:</strong>AG- 08 Tower A, Pioneer Urban Square, Sector 62, Gurgaon , 122102</p>
                  <p style={{color:"#000"}}><strong>Email:</strong><a href="mailto:info@indus-tech.co.in">info@indus-tech.co.in</a></p>
                  <p style={{color:"#000"}}><strong>Phone:</strong><a href="tel:+91 9289479436">+91 9289479436</a></p>
                  <p style={{color:"#000"}}><strong>Hours:</strong>{checkOfficeStatus()}</p>
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
            <div className="contact-form-container">
            <ContactusForm />
          </div>
            </div>
            </>
    );
};

export default ContactUs;