import React, { useState } from 'react';
import '../styles/RepaymentAuthentication.css';

const RepaymentAuthentication = ({ bankDetails = {}, onBack, onComplete }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  
  const isOtpComplete = otp.every(digit => digit.length === 1);
  
  const handleSubmit = () => {
    if (isOtpComplete) {
      onComplete();
    }
  };
  
  // For resend OTP functionality
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  
  const handleResendOtp = () => {
    setResendDisabled(true);
    setTimer(30);
    
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setResendDisabled(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  return (
    <div className="repayment-auth-screen">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>←</button>
        <h1>Verify Bank Account</h1>
        <div className="header-placeholder"></div>
      </div>
      
      <div className="auth-content">
        <div className="auth-message">
          <p>We've sent a one-time password (OTP) to your registered mobile number associated with {bankDetails.bankName} account ending with {bankDetails.accountNumber}.</p>
        </div>
        
        <div className="otp-container">
          <div className="otp-label">Enter OTP</div>
          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                className="otp-input"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                maxLength={1}
              />
            ))}
          </div>
          
          <div className="resend-container">
            {resendDisabled ? (
              <span className="timer">Resend OTP in {timer}s</span>
            ) : (
              <button className="resend-button" onClick={handleResendOtp}>
                Resend OTP
              </button>
            )}
          </div>
        </div>
        
        <div className="auth-note">
          <p>This authentication is required to set up the auto-debit mandate for loan repayment.</p>
        </div>
      </div>
      
      <div className="auth-footer">
        <button 
          className={`verify-button ${isOtpComplete ? 'active' : ''}`}
          disabled={!isOtpComplete}
          onClick={handleSubmit}
        >
          Verify & Complete
        </button>
      </div>
    </div>
  );
};

export default RepaymentAuthentication;