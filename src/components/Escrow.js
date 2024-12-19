import React, { useState } from 'react';
import FAQSection from './FAQSection';

const Escrow = () => {

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
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Escrow</h1>
      <div style={styles.timelineContainer}>
        {escrowContent.map((item, index) => (
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
    <FAQSection />
    </>
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

export default Escrow;
