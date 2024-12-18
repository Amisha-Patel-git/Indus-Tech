import React, { useState } from 'react';

const ConnectedBanking = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card index

  const connectedBankingContent = [
    {
      title: "Omni-Channel Experience",
      text: "Customers can access banking services through multiple channels (mobile apps, websites, ATMs, etc.) with a consistent experience.",
    },
    {
      title: "Integration with Third-Party Services",
      text: "Connected banking often involves partnerships with fintech companies and other service providers, allowing banks to offer additional services like budgeting tools, investment platforms, or payment solutions.",
    },
    {
      title: "Data-Driven Personalization",
      text: "Banks utilize customer data to deliver personalized services, such as tailored product recommendations, spending insights, and financial advice.",
    },
    {
      title: "Real-Time Transactions and Notifications",
      text: "Customers can make transactions and receive updates instantly, enhancing the speed and convenience of banking services.",
    },
    {
      title: "Enhanced Security",
      text: "Connected banking often includes advanced security measures, such as biometric authentication and fraud detection, to protect user information and transactions.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Connected Banking Solutions</h1>
      <div style={styles.cardContainer}>
        {connectedBankingContent.map((card, index) => (
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

export default ConnectedBanking;
