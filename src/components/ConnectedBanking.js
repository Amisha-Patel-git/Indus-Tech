import React, { useState } from 'react';

const ConnectedBanking = () => {

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
      <h1 style={styles.heading}>Connected Banking</h1>
      <div style={styles.timelineContainer}>
        {connectedBankingContent.map((item, index) => (
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

export default ConnectedBanking;
