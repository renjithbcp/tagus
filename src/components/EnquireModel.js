// EnquireModal.js

import React from 'react';
import './EnquireModel.css';

const EnquireModal = ({ onClose }) => {
  return (
    <div className="enquire-modal-overlay" onClick={onClose}>
      <div className="enquire-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal content goes here */}
        <h2>Enquire Modal</h2>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Phone:
            <input type="text" />
          </label>
          <label>
            Message:
            <textarea />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EnquireModal;
