import React from 'react';
import '../styles/StatusScreen.css';

const StatusScreen = ({ 
  type,  // 'data-sharing-completed', 'loan-disbursed', 'kyc-completed'
  data = {},
  onContinue,
  onViewDetails
}) => {
  
  // Define title and content based on status type
  const getStatusContent = () => {
    switch (type) {
      case 'data-sharing-completed':
        return {
          title: 'Data sharing completed',
          subtitle: 'We have successfully shared your information with lenders',
          icon: 'information_shared',
          primaryButtonText: 'View Loan Offers',
          secondaryButtonText: null
        };
      case 'loan-disbursed':
        return {
          title: 'Loan Disbursed',
          subtitle: 'Amount has been transferred to your bank account',
          icon: 'loan_disbursed',
          primaryButtonText: 'Done',
          secondaryButtonText: 'View Details'
        };
      case 'kyc-completed':
        return {
          title: 'KYC Completed',
          subtitle: 'Your KYC has been successfully completed',
          icon: 'kyc_completed',
          primaryButtonText: 'Continue',
          secondaryButtonText: null
        };
      default:
        return {
          title: 'Success',
          subtitle: 'Operation completed successfully',
          icon: 'success',
          primaryButtonText: 'Continue',
          secondaryButtonText: null
        };
    }
  };

  const { title, subtitle, icon, primaryButtonText, secondaryButtonText } = getStatusContent();

  // Show loan details if available and relevant
  const showLoanDetails = type === 'loan-disbursed' && data.loanDetails;

  return (
    <div className="status-screen">
      <div className="status-content">
        <div className={`status-icon ${icon}`}></div>
        <h1 className="status-title">{title}</h1>
        <p className="status-subtitle">{subtitle}</p>
        
        {showLoanDetails && (
          <div className="loan-details-container">
            <div className="loan-detail-item">
              <span className="detail-label">Loan Amount</span>
              <span className="detail-value">₹{data.loanDetails.amount.toLocaleString()}</span>
            </div>
            <div className="loan-detail-item">
              <span className="detail-label">Interest Rate</span>
              <span className="detail-value">{data.loanDetails.interestRate}%</span>
            </div>
            <div className="loan-detail-item">
              <span className="detail-label">Tenor</span>
              <span className="detail-value">{data.loanDetails.tenor} days</span>
            </div>
            <div className="loan-detail-item">
              <span className="detail-label">Disbursement Date</span>
              <span className="detail-value">{data.loanDetails.disbursementDate}</span>
            </div>
            <div className="loan-detail-item">
              <span className="detail-label">Repayment Date</span>
              <span className="detail-value">{data.loanDetails.repaymentDate}</span>
            </div>
          </div>
        )}
        
        <div className="status-buttons">
          <button 
            className="primary-button"
            onClick={onContinue}
          >
            {primaryButtonText}
          </button>
          
          {secondaryButtonText && (
            <button 
              className="secondary-button"
              onClick={onViewDetails}
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusScreen;