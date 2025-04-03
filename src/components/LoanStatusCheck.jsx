import React from 'react';

const LoanStatusCheck = ({ status, onResumeApplication }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Loan Status</h1>
      <p className="text-gray-700 mb-4">Status: {status}</p>
      {status === 'Incomplete' && (
        <button
          onClick={onResumeApplication}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Resume Application
        </button>
      )}
    </div>
  );
};

export default LoanStatusCheck;