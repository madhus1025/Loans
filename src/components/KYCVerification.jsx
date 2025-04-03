import React, { useState } from 'react';

const KYCVerification = ({ onCompleteKYC }) => {
  const [kycMethod, setKycMethod] = useState('');

  const handleKYCSelection = (method) => {
    setKycMethod(method);
  };

  const handleSubmit = () => {
    onCompleteKYC(kycMethod);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">KYC Verification</h1>
      <p className="mb-4">Select a KYC method:</p>
      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => handleKYCSelection('Aadhar eKYC')}
        >
          Aadhar eKYC
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => handleKYCSelection('Digilocker')}
        >
          Digilocker
        </button>
      </div>
      {kycMethod && (
        <div className="mt-4">
          <p className="text-gray-700">Selected Method: {kycMethod}</p>
          <button
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={handleSubmit}
          >
            Complete KYC
          </button>
        </div>
      )}
    </div>
  );
};

export default KYCVerification;