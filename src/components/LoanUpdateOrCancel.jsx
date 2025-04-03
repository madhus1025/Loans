import React, { useState } from 'react';

const LoanUpdateOrCancel = ({ loanDetails, onUpdate, onCancel }) => {
  const [updatedDetails, setUpdatedDetails] = useState(loanDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(updatedDetails);
  };

  const handleCancel = () => {
    onCancel(loanDetails.id);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update or Cancel Loan Application</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Loan Amount:</label>
          <input
            type="number"
            name="amount"
            value={updatedDetails.amount}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Tenure:</label>
          <input
            type="number"
            name="tenure"
            value={updatedDetails.tenure}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Update Application
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Cancel Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanUpdateOrCancel;