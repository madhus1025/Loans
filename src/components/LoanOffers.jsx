import React, { useState } from 'react';

const LoanOffers = ({ offers, onSelectOffer, onEnhanceOffer }) => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleSelect = (offer) => {
    setSelectedOffer(offer);
    onSelectOffer(offer);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Loan Offers</h1>
      {offers.length > 0 ? (
        <ul className="space-y-4">
          {offers.map((offer, index) => (
            <li key={index} className="border p-4 rounded shadow-sm">
              <p><strong>Amount:</strong> {offer.amount}</p>
              <p><strong>Interest Rate:</strong> {offer.interestRate}%</p>
              <p><strong>Tenure:</strong> {offer.tenure} months</p>
              <button
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                onClick={() => handleSelect(offer)}
              >
                Select Offer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No offers available at the moment.</p>
      )}
      <button
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
        onClick={onEnhanceOffer}
        disabled={!selectedOffer}
      >
        Enhance Offer
      </button>
    </div>
  );
};

export default LoanOffers;