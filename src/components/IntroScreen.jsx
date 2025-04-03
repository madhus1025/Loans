import React from 'react';
import '../styles/IntroScreen.css';

const IntroScreen = ({ onContinue }) => {
  return (
    <div className="intro-screen">
      <div className="intro-content">
        <div className="intro-image"></div>
        <h1 className="intro-title">Get quick loans for your business</h1>
        <p className="intro-description">
          Apply for a loan based on your GST invoices and get approved instantly
        </p>
        <button className="intro-button" onClick={onContinue}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;