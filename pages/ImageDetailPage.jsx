import React from 'react';

const ImageDetailPage = ({ photoId, onBack, onNavigate }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold mb-4">Image Detail</h1>
      <p className="text-lg">Photo ID: {photoId}</p>
    </div>
  );
};

export default ImageDetailPage;
