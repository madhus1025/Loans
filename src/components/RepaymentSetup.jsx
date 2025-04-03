import React, { useState } from 'react';
import '../styles/RepaymentSetup.css';

const RepaymentSetup = ({ loanDetails = {}, onBack, onContinue }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  
  const accounts = [
    { id: '1', bankName: 'HDFC Bank', accountNumber: 'XXXX1234', ifsc: 'HDFC0001234' },
    { id: '2', bankName: 'SBI', accountNumber: 'XXXX5678', ifsc: 'SBIN0005678' }
  ];

  return (
    <div className="repayment-setup-screen">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>←</button>
        <h1>Repayment Setup</h1>
        <div className="header-placeholder"></div>
      </div>
      
      <div className="repayment-content">
        <div className="loan-summary">
          <div className="summary-item">
            <span className="summary-label">Loan Amount</span>
            <span className="summary-value">₹{loanDetails.amount?.toLocaleString()}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Repayment Amount</span>
            <span className="summary-value">₹{loanDetails.repaymentAmount?.toLocaleString()}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Repayment Date</span>
            <span className="summary-value">{loanDetails.repaymentDate}</span>
          </div>
        </div>
        
        <div className="section-label">Select bank account for repayment</div>
        
        <div className="accounts-list">
          {accounts.map(account => (
            <div 
              key={account.id} 
              className={`account-item ${selectedAccount === account.id ? 'selected' : ''}`}
              onClick={() => setSelectedAccount(account.id)}
            >
              <div className="account-details">
                <div className="bank-name">{account.bankName}</div>
                <div className="account-number">{account.accountNumber}</div>
                <div className="ifsc-code">IFSC: {account.ifsc}</div>
              </div>
              <div className="account-checkbox">
                {selectedAccount === account.id && <div className="checkbox-inner"></div>}
              </div>
            </div>
          ))}
        </div>
        
        <button className="add-account-button">
          + Add New Bank Account
        </button>
        
        <div className="repayment-note">
          <p>The repayment amount will be automatically deducted from your selected bank account on the due date.</p>
        </div>
      </div>
      
      <div className="repayment-footer">
        <button 
          className={`continue-button ${selectedAccount ? 'active' : ''}`}
          disabled={!selectedAccount}
          onClick={onContinue}
        >
          Set Up Auto-Repayment
        </button>
      </div>
    </div>
  );
};

export default RepaymentSetup;