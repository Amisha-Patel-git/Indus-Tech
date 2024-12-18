import React, { useState } from 'react';

const CollectionSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card index

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Collection Solutions</h1>
      <div style={styles.cardContainer}>
        {[
          {
            title: "Payment Processing",
            text: "Facilitates the acceptance of various payment methods, including credit/debit cards, digital wallets, bank transfers, and more.",
          },
          {
            title: "Real-Time Transactions",
            text: "Enables instant processing and confirmation of transactions, enhancing the customer experience.",
          },
          {
            title: "Security",
            text: "Implements security measures such as encryption, tokenization, and compliance with standards like PCI DSS to protect sensitive payment information.",
          },
          {
            title: "Customization",
            text: "Allows businesses to tailor the payment experience to fit their specific needs, including custom checkout flows and branding.",
          },
          {
            title: "Reporting and Analytics",
            text: "Provides tools for tracking transaction history, sales data, and other relevant metrics to help businesses analyze their payment processes.",
          },
        ].map((card, index) => (
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Adjust card width for smaller screens
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
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

export default CollectionSolutions;
