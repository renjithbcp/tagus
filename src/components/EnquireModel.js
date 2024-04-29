import React, { useState } from 'react';
import './EnquireModel.css';

const EnquireModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  const isFormValid = () => {
    const { name, email, phone, pincode } = formData;
    return name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && pincode.trim() !== '';
  };

  return (
    <div className="enquire-modal-overlay" onClick={onClose}>
      <div className="enquire-modal" onClick={(e) => e.stopPropagation()}>
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="form-container">
          <h2>Product Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-container">
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="input-container">
              <label htmlFor="pincode">Pincode:</label>
              <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
            </div>
            <button type="submit" disabled={!isFormValid()}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;
