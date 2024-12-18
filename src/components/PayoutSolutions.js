import React, { useState } from 'react';

const PayoutSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card index

  const payoutContent = [
    {
      title: "Disbursement Options",
      text: "Supports various payout methods, including bank transfers, digital wallets, and checks.",
    },
    {
      title: "Automated Payments",
      text: "Allows for automated and scheduled payments, reducing manual effort and minimizing errors.",
    },
    {
      title: "Real-Time Transactions",
      text: "Enables real-time or near-instant payouts, improving cash flow and recipient satisfaction.",
    },
    {
      title: "Security and Compliance",
      text: "Incorporates security measures such as encryption and fraud detection, and complies with regulations to protect sensitive financial information.",
    },
    {
      title: "Customizable Workflows",
      text: "Provides businesses with the ability to customize payment workflows based on their specific needs and requirements.",
    },
    {
      title: "Tracking and Reporting",
      text: "Offers tools for tracking payment statuses, generating reports, and managing transaction history for better financial oversight.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payout Solutions</h1>
      <div style={styles.cardContainer}>
        {payoutContent.map((card, index) => (
          <div
            key={index}
            style={
              hoveredCard === index
                ? { ...styles.card, ...styles.cardHover }
                : styles.card
            }
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 style={styles.cardTitle}>{card.title}</h2>
            <p style={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f8f9fa',
    padding: '20px',
    margin: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#343a40',
    marginBottom: '20px',
    textAlign: 'center',
    padding: '0 10px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid layout
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
    padding: '10px', // Padding for better spacing on smaller screens
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#007bff',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '14px',
    color: '#495057',
    lineHeight: '1.6',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
  },
};

export default PayoutSolutions;
