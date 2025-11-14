import React from 'react';

const Footer = ({ onAdminClick }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Jinette Ramos Photography. All rights reserved.
          </p>
          <button
            onClick={onAdminClick}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
