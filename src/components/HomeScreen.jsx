import React from 'react';
import '../styles/HomeScreen.css';

const HomeScreen = ({ onApplyForLoan, onViewLoans }) => {
  return (
    <div className="home-screen">
      <div className="home-header">
        <h1>MSME Financing</h1>
      </div>
      
      <div className="home-content">
        <div className="welcome-card">
          <div className="welcome-text">
            <h2>Welcome!</h2>
            <p>Apply for a loan based on your GST invoices and get approved instantly</p>
          </div>
          <div className="welcome-image"></div>
        </div>
        
        <div className="action-buttons">
          <button className="apply-loan-button" onClick={onApplyForLoan}>
            Apply for Loan
          </button>
          <button className="view-loans-button" onClick={onViewLoans}>
            View My Loans
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;