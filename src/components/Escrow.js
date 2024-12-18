import React, { useState } from 'react';

const Escrow = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card index

  const escrowContent = [
    {
      title: "Neutral Third Party",
      text: "An escrow agent (often a bank or a specialized escrow company) manages the account and ensures that the terms of the agreement are met.",
    },
    {
      title: "Security",
      text: "The funds in an escrow account are protected until all conditions of the agreement are satisfied, providing security for both parties.",
    },
    {
      title: "Conditions of Release",
      text: "The escrow agreement specifies the conditions under which the funds or assets will be released. This could involve milestones in a project or completion of specific contractual obligations.",
    },
    {
      title: "Types of Transactions",
      text: "Escrow accounts are commonly used in real estate transactions, online purchases, mergers and acquisitions, and other situations where trust is essential.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Escrow Solutions</h1>
      <div style={styles.cardContainer}>
        {escrowContent.map((card, index) => (
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

export default Escrow;
