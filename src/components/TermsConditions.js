import React, { useEffect, useState } from 'react';  

// Assuming termsAndConditions.json is in the same src folder
import termsData from './TermAndCondition.json';

const TermsAndConditions = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(termsData);
  }, []);

  // Function to render content conditionally
  const renderContent = (content) => {
    // If the content is an array of strings
    if (Array.isArray(content)) {
      return content.map((text, index) => <p key={index}>{text}</p>);
    }
    
    // If the content is an array of objects with "a" and "definition"
    if (Array.isArray(content) && content[0] && content[0].a && content[0].definition) {
      return content.map((item, index) => (
        <div key={index}>
          <p><strong>{item.a}</strong></p>
          <p>{item.definition}</p>
        </div>
      ));
    }

    return <p>{content}</p>;
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="terms">
      <style>{`
        .terms {
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

        .terms-content {
          width: 100%;
          padding: 20px;
          box-sizing: border-box;
          overflow: auto;
          margin-left: 10px;
          text-align: left;
        }

        .terms-content h1 {
          margin-bottom: 20px;
          font-size: 18px;
        }

        .terms-content h2 {
          font-size: 16px;
          margin-top: 20px;
        }

        .terms-content p {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 20px;
          text-align: justify;
        }

        .terms-content p strong {
          font-weight: bold;
        }

        .terms-content ul {
          list-style-type: none;
          padding-left: 0;
        }

        .terms-content li {
          margin-bottom: 15px;
          font-size: 14px;
        }

        /* Add style to handle ordered lists properly */
        .terms-content ol {
          list-style-type: decimal;
          padding-left: 20px;
        }

        .terms-content ol li {
          margin-bottom: 10px;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .terms-content {
            padding: 15px;
            margin-top: 10%;
          }
          .terms-content h1 {
            font-size: 1.5rem;
          }
          .terms-content h2 {
            font-size: 1.3rem;
          }
          .terms-content p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .terms-content {
            margin-top: 5%;
            padding: 10px;
          }
          .terms-content h1 {
            font-size: 1.2rem;
          }
          .terms-content h2 {
            font-size: 1.1rem;
          }
          .terms-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>

      {Object.keys(termsData.terms_and_conditions).map((key) => {
        const section = termsData.terms_and_conditions[key];
        return (
          <div key={key} className="terms-content">
            <h2>{section.heading}</h2>
            {section.content.map((item, index) => {
              if (typeof item === 'string') {
                return <p key={index}>{item}</p>;
              } else if (Array.isArray(item)) {
                // Handle when item is an array, like numbered points
                return (
                  <ol key={index}>
                    {item.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ol>
                );
              } else {
                return (
                  <div key={index}>
                    <strong>{Object.keys(item)[0]}:</strong> {item[Object.keys(item)[0]]} 
                    <br />
                    <p>{item.definition}</p>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TermsAndConditions;
