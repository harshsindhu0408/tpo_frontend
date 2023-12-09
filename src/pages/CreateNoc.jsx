import React, { useState } from "react";

const CreateNoc = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    mobileNo: "",
    email: "",
    registrationNo: "",
    rollNo: "",
    branch: "",
    admissionYear: "",
    lastLogin: new Date().toLocaleString(),
  });

  const [isEmailDisabled, setIsEmailDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setIsEmailDisabled(!!formData.registrationNo);
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Father's Name
          </label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Repeat the above pattern for other form fields */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            disabled={isEmailDisabled}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Registration Number
          </label>
          <input
            type="text"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleEmailChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Roll Number
          </label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Branch
          </label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Admission Year
          </label>
          <input
            type="text"
            name="admissionYear"
            value={formData.admissionYear}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNoc;
