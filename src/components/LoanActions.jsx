import React, { useState } from 'react';

const LoanActions = ({ loans, onAction }) => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [actionType, setActionType] = useState('');

  const handleLoanSelection = (loan) => {
    setSelectedLoan(loan);
  };

  const handleAction = () => {
    if (selectedLoan && actionType) {
      onAction(selectedLoan, actionType);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Loan Actions</h1>
      <p className="mb-4">Select a loan:</p>
      <ul className="space-y-4">
        {loans.map((loan, index) => (
          <li key={index} className="border p-4 rounded shadow-sm">
            <p><strong>Loan ID:</strong> {loan.id}</p>
            <p><strong>Amount:</strong> {loan.amount}</p>
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
              onClick={() => handleLoanSelection(loan)}
            >
              Select Loan
            </button>
          </li>
        ))}
      </ul>
      {selectedLoan && (
        <div className="mt-4">
          <p className="text-gray-700">Selected Loan ID: {selectedLoan.id}</p>
          <p className="mt-2">Select an action:</p>
          <div className="space-x-4">
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              onClick={() => setActionType('Late Payment')}
            >
              Late Payment
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => setActionType('Part Prepayment')}
            >
              Part Prepayment
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => setActionType('Full Repayment')}
            >
              Full Repayment
            </button>
          </div>
          {actionType && (
            <div className="mt-4">
              <p className="text-gray-700">Selected Action: {actionType}</p>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleAction}
              >
                Confirm Action
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanActions;