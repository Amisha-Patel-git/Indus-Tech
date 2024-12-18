import React, { useState } from 'react';

const StructuredSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card index

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Structured Solutions</h1>
      <div style={styles.cardContainer}>
        {[ // List of cards content
          {
            title: "Consolidated Payment Processing",
            text: "The bank aggregates different payment methods, simplifying the payment process for merchants by providing a single point of access.",
          },
          {
            title: "Merchant Services",
            text: "Banks typically offer additional services such as fraud protection, chargeback management, and transaction reporting.",
          },
          {
            title: "Integration",
            text: "Payment aggregators provide APIs and tools that enable businesses to integrate payment processing into their websites or applications easily.",
          },
          {
            title: "Compliance and Security",
            text: "Banks usually adhere to strict regulatory standards and security protocols, ensuring that transactions are secure and compliant with regulations such as PCI DSS.",
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
    fontSize: '36px',
    fontWeight: '700',
    color: '#343a40',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    fontSize: '20px',
    fontWeight: '600',
    color: '#007bff',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    color: '#495057',
    lineHeight: '1.5',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
  },
};

export default StructuredSolutions;
