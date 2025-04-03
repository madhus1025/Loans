import React from 'react';
import RegistrationForm from './RegistrationForm';

const LoanApplicationForm = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Add logic to handle form submission, such as API calls
  };

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Loan Application</h1>
      <h2 className="text-xl font-semibold mb-2">For Sole Proprietors</h2>
      <RegistrationForm userType="soleProprietor" onSubmit={handleFormSubmit} />
      <h2 className="text-xl font-semibold mt-6 mb-2">For Individuals</h2>
      <RegistrationForm userType="individual" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default LoanApplicationForm;