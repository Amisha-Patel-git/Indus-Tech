import React from 'react';

const PayoutSolutions = () => {
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
      <div style={styles.timelineContainer}>
        {payoutContent.map((item, index) => (
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

export default PayoutSolutions;
