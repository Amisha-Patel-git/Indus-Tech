import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <style>
        {`
          .privacy {
            margin-top: 5.5%;
            padding: 15px;
            left: 0;
            width: 100%;
            min-height: 100vh; /* Ensures the container takes at least the full height of the viewport */
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* Ensure content is at the top */
            background-color: #ffffe5; /* If you want a solid color background */
            background-image: url('https://example.com/background.jpg'); /* Add your background image */
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Makes background stay fixed while scrolling */
          }

          .privacy-content {
            width: 100%; /* Ensures content takes up the full width */
            padding: 20px;
            box-sizing: border-box;
            overflow: auto; /* Allows content to scroll if it exceeds the container's height */
            margin-left: 10px; /* Adds a small left margin to align content */
            text-align: left; /* Aligns text to the left */
          }

          .privacy-content h1 {
            margin-bottom: 20px;
            font-size: 18px;
          }

          .privacy-content p {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: justify; /* Justify text to ensure it stretches across the full width */
          }

          .privacy-content p strong {
            font-weight: bold;
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .privacy-content {
              padding: 15px;
              margin-top: 10%;
              margin-left: 5px; /* Slightly reduce the left margin on smaller screens */
            }

            .privacy-content h1 {
              font-size: 1.5rem;
            }

            .privacy-content p {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 576px) {
            .privacy-content {
              margin-top: 5%;
              padding: 10px;
              margin-left: 5px; /* Slightly reduce the left margin on mobile devices */
            }

            .privacy-content h1 {
              font-size: 1.2rem;
            }

            .privacy-content p {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
      <div className="privacy">
        <div className="privacy-content">
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
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
