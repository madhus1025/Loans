import React, { useState } from 'react';

const RegistrationForm = ({ userType, onSubmit }) => {
  const [formData, setFormData] = useState({
    gstDetails: '',
    mobileNumber: '',
    pan: '',
    name: '',
    address: '',
    dob: '',
    salary: '',
    employmentType: '',
    companyName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
      {userType === 'soleProprietor' && (
        <div>
          <label className="block text-gray-700 font-medium">GST Details:</label>
          <input
            type="text"
            name="gstDetails"
            value={formData.gstDetails}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      <div>
        <label className="block text-gray-700 font-medium">Mobile Number:</label>
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {userType === 'individual' && (
        <>
          <div>
            <label className="block text-gray-700 font-medium">PAN:</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Salary:</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Employment Type:</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="salaried">Salaried</option>
              <option value="selfEmployed">Self Employed</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;