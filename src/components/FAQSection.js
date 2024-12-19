import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the benefit of using an escrow account?',
      answer: 'What is the benefit of using an escrow account?',
    },
    {
      question: 'What is escrow banking?',
      answer: 'Escrow banking involves utilizing a secure financial instrument known as escrow across various financial and non-financial applications in a safe and protected manner.',
    },
    {
        question: 'What type of solutions are offered by Castler in escrow banking?',
        answer: '',
      },
      {
        question: 'How can I ensure payment safety using Castler’s solution?',
        answer: 'Castler’s escrow solution protects money in scheduled commercial banks with bank grade security and requires approval of a SEBI approved trustee before release of payment.',
      },
      {
        question: 'Which banks are available to open an escrow?',
        answer: '',
      },
      {
        question: 'How can enterprise start their escrow journey?',
        answer: 'You can click here and fill the with your details so that our escrow expert can contact you.',
      },
      {
        question: 'How can I open an escrow account?',
        answer: 'To open an escrow account, you need to select a reputable escrow service provider like Castler that offers escrow services. Provide the necessary documentation and details of the transaction, and the escrow agent will set up the account and manage it according to the agreed terms.',
      },
      {
        question: 'When is an escrow account typically used?',
        answer: 'Escrow accounts are commonly used in real estate transactions, online purchases, mergers and acquisitions, and various financial agreements. They are particularly useful in transactions involving large sums of money or where there is a need for conditions to be met before completing the transaction.',
      },
      {
        question: 'How does an escrow account work?',
        answer: 'In an escrow account, the buyer and seller agree on the terms of a transaction. The buyer deposits funds into the escrow account, which are then held by the escrow agent. Once all conditions are satisfied, such as completing necessary paperwork or fulfilling contractual obligations, the escrow agent releases the funds to the seller.',
      },
      {
        question: 'What is escrow?',
        answer: 'Escrow is an arrangement in which an asset or escrow money is held by a third party on behalf of 2 other parties that are in the process of completing a transaction.',
      },
    // Add more FAQs here
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <style>{`
        .faq-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 40px 20px;
          margin-top: 50px;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .faq-header {
          flex: 1;
          padding-right: 20px;
          max-width: 30%;
          text-align: left;
        }

        .faq-header h2 {
          font-size: 28px;
          color: #333;
          font-weight: bold;
          margin: 0;
        }

        .faq-content {
          flex: 2;
          max-width: 65%;
        }

        .faq-item {
          margin-bottom: 15px;
        }

        .faq-question {
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          color: #6f42c1;
          border: none;
          background: none;
          text-align: left;
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          transition: background 0.3s ease;
        }

        .faq-question:hover {
          background: #6f42c1;
          color: #fff;
        }

        .faq-answer {
          padding: 10px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-top: 5px;
          display: none;
        }

        .faq-item.active .faq-answer {
          display: block;
        }
      `}</style>
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
