import React from 'react';

const AdminPanel = ({ isActive, onExit, onSave, onImageChange }) => {
  if (!isActive) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-100 border-b-2 border-yellow-400 p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-bold text-yellow-800">Admin Mode Active</span>
          <button
            onClick={onSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Exit Admin
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
