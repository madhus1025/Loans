import React, { useState } from 'react';

const DisbursementDetails = ({ onSubmitDisbursement }) => {
  const [accountDetails, setAccountDetails] = useState('');

  const handleChange = (e) => {
    setAccountDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitDisbursement(accountDetails);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Disbursement Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Account Details:</label>
          <input
            type="text"
            value={accountDetails}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DisbursementDetails;