import React from 'react';

const LoanSummary = ({ loanDetails }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Loan Summary</h1>
      <div className="space-y-2">
        <p><strong>Loan ID:</strong> {loanDetails.id}</p>
        <p><strong>Amount:</strong> {loanDetails.amount}</p>
        <p><strong>Interest Rate:</strong> {loanDetails.interestRate}%</p>
        <p><strong>Tenure:</strong> {loanDetails.tenure} months</p>
        <p><strong>Status:</strong> {loanDetails.status}</p>
      </div>
    </div>
  );
};

export default LoanSummary;