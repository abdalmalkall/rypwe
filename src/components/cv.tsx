// components/CvModal.jsx
import React from "react";

const CvModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl p-4 shadow-2xl w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-black text-2xl font-bold hover:text-gray-500"
        >
          ×
        </button>

     

    
      </div>
    </div>
  );
};

export default CvModal;
