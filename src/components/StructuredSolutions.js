import React, { useState } from 'react';

const StructuredSolutions = () => {

  const structuredSolutionsContent=[
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
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Structured Solutions</h1>
      <div style={styles.timelineContainer}>
        {structuredSolutionsContent.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.circle}></div>
            <div style={styles.content}>
              <h2 style={styles.title}>{item.title}</h2>
              <p style={styles.text}>{item.text}</p>
            </div>
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
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflowX: 'hidden',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#343a40',
    marginBottom: '40px',
    textAlign: 'center',
    paddingTop: '10%',
  },
  timelineContainer: {
    position: 'relative',
    maxWidth: '800px',
    width: '100%',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
    position: 'relative',
  },
  circle: {
    width: '15px',
    height: '15px',
    backgroundColor: '#6f42c1',
    borderRadius: '50%',
    marginRight: '20px',
    flexShrink: 0,
  },
  content: {
    padding: '10px',
    borderLeft: '2px solid rgb(192 171 238)',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#6f42c1',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    color: '#495057',
    lineHeight: '1.6',
  },
};

export default StructuredSolutions;
