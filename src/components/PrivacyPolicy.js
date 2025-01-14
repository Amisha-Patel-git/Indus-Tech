import React, { useEffect, useState } from "react";
import privacyPolicyContent from './PrivacyPolicyContent.json';

const PrivacyPolicy = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Simulating fetching content (useful if content grows or is dynamic)
    setContent(privacyPolicyContent.privacyPolicy);
  }, []);

  if (!content) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <>
      <style>
        {`
          .privacy {
            margin-top: 1%;
            padding: 15px;
            left: 0;
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffe5;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          }

          .privacy-content {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            overflow: auto;
            margin-left: 10px;
            text-align: left;
          }

          .privacy-content h1 {
            margin-bottom: 20px;
            font-size: 18px;
          }

          .privacy-content h2 {
            font-size: 16px;
            margin-top: 20px;
          }

          .privacy-content p {
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: justify;
          }

          .privacy-content p strong {
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .privacy-content {
              padding: 15px;
              margin-top: 10%;
            }
            .privacy-content h1 {
              font-size: 1.5rem;
            }
            .privacy-content h2 {
              font-size: 1.3rem;
            }
            .privacy-content p {
              font-size: 0.95rem;
            }
          }

          @media (max-width: 576px) {
            .privacy-content {
              margin-top: 5%;
              padding: 10px;
            }
            .privacy-content h1 {
              font-size: 1.2rem;
            }
            .privacy-content h2 {
              font-size: 1.1rem;
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

          {/* Introduction Section */}
          <section>
            <h2>Introduction</h2>
            {content.intro.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Information We Collect */}
          <section>
            <h2>{content.informationWeCollect.title}</h2>
            {content.informationWeCollect.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Methods of Data Collection */}
          <section>
            <h2>{content.methodsOfDataCollection.title}</h2>
            {content.methodsOfDataCollection.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Use of Information */}
          <section>
            <h2>{content.useOfInformation.title}</h2>
            {content.useOfInformation.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Legal Basis for Processing */}
          <section>
            <h2>{content.legalBasisForProcessing.title}</h2>
            {content.legalBasisForProcessing.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2>{content.dataSharingAndDisclosure.title}</h2>
            {content.dataSharingAndDisclosure.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Data Security */}
          <section>
            <h2>{content.dataSecurity.title}</h2>
            {content.dataSecurity.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Data Retention */}
          <section>
            <h2>{content.dataRetention.title}</h2>
            {content.dataRetention.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Your Rights */}
          <section>
            <h2>{content.yourRights.title}</h2>
            {content.yourRights.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2>{content.cookiesAndTracking.title}</h2>
            {content.cookiesAndTracking.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Third-Party Integrations */}
          <section>
            <h2>{content.thirdPartyIntegrations.title}</h2>
            {content.thirdPartyIntegrations.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Children's Privacy */}
          <section>
            <h2>{content.childrensPrivacy.title}</h2>
            {content.childrensPrivacy.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Grievance Redressal */}
          <section>
            <h2>{content.grievanceRedressal.title}</h2>
            {content.grievanceRedressal.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Updates to Policy */}
          <section>
            <h2>{content.updatesToPolicy.title}</h2>
            {content.updatesToPolicy.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          {/* Governing Law and Dispute Resolution */}
          <section>
            <h2>{content.governingLaw.title}</h2>
            {content.governingLaw.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
