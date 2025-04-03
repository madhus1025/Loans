import React from 'react';
import '../styles/LoanOfferDetails.css';

const LoanOfferDetails = ({ offer = {}, onBack, onAcceptOffer }) => {
  return (
    <div className="offer-details-screen">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>←</button>
        <h1>Offer Details</h1>
        <div className="header-placeholder"></div>
      </div>
      
      <div className="offer-details-content">
        <div className="lender-section">
          <div className="lender-logo" style={{ backgroundImage: `url(${offer.lenderLogo})` }}></div>
          <div className="lender-name">{offer.lenderName}</div>
        </div>
        
        {offer.invoiceNumber && (
          <div className="invoice-section">
            <div className="section-title">Invoice Details</div>
            <div className="invoice-detail-row">
              <span className="detail-label">Invoice Number</span>
              <span className="detail-value">#{offer.invoiceNumber}</span>
            </div>
            <div className="invoice-detail-row">
              <span className="detail-label">Invoice Amount</span>
              <span className="detail-value">₹{offer.invoiceAmount?.toLocaleString()}</span>
            </div>
            <div className="invoice-detail-row">
              <span className="detail-label">Invoice Date</span>
              <span className="detail-value">{offer.invoiceDate}</span>
            </div>
          </div>
        )}
        
        <div className="loan-details-section">
          <div className="section-title">Loan Details</div>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Loan Amount</span>
              <span className="detail-value">₹{offer.loanAmount?.toLocaleString()}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Interest Rate</span>
              <span className="detail-value">{offer.interestRate}%</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Tenor</span>
              <span className="detail-value">{offer.tenor} days</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Processing Fee</span>
              <span className="detail-value">₹{offer.processingFee?.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="repayment-section">
          <div className="section-title">Repayment Details</div>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Repayment Amount</span>
              <span className="detail-value">₹{offer.repaymentAmount?.toLocaleString()}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Repayment Date</span>
              <span className="detail-value">{offer.repaymentDate}</span>
            </div>
          </div>
        </div>
        
        <div className="terms-section">
          <div className="section-title">Terms & Conditions</div>
          <div className="terms-content">
            <p>By accepting this loan offer, you agree to the following terms:</p>
            <ul>
              <li>The loan amount will be disbursed to your registered bank account</li>
              <li>The repayment will be automatically deducted from your account on the due date</li>
              <li>Late payment will incur additional charges as per lender policy</li>
            </ul>
            <div className="checkbox-container">
              <input type="checkbox" id="terms-checkbox" />
              <label htmlFor="terms-checkbox">I agree to the terms and conditions</label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="offer-footer">
        <button className="accept-offer-button" onClick={onAcceptOffer}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default LoanOfferDetails;